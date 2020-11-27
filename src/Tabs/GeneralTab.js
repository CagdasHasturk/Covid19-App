import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";

import {
  AfricaIcon,
  AsiaIcon,
  AustraliaIcon,
  EuropeIcon,
  NorthAmericaIcon,
  SouthAmericaIcon
} from "../icons";

import { ContinentCard, CovidDataChart } from "../components";
import { AnimatedSVGPaths } from "react-native-svg-animations";
import { svgPath } from "../icons";

import axios from "axios";

const iconSet = {
  "North America": <NorthAmericaIcon />,
  "South America": <SouthAmericaIcon />,
  "Asia": <AsiaIcon />,
  "Africa": <AfricaIcon />,
  "Europe": <EuropeIcon />,
  "Oceania": <AustraliaIcon />
}

const GeneralTab = () => {

  const [worldData, setWorldData] = useState({});
  const [continentData, setContinentData] = useState({});

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let totalData = await axios.get('https://api.collectapi.com/corona/totalData', {
      headers: {
        "content-type": "application/json",
        "authorization": "[apikey]"
      }
    })
    setWorldData(totalData.data.result)
    let conData = await axios.get('https://api.collectapi.com/corona/continentData', {
      headers: {
        "content-type": "application/json",
        "authorization": "[apikey]"
      }
    })
    setContinentData(conData.data.result)
  }

  const renderContinents = ({ item }) => <ContinentCard item={item} icon={iconSet[item.continent]} />

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <StatusBar backgroundColor="#101010" barStyle="light-content" />
          <View style={styles.cardWorld}>
            <View style={styles.iconContaier}>
              <View>
                <AnimatedSVGPaths
                  strokeColor={"#f44336"}
                  fill={"#990321"}
                  strokeWidth={20}
                  duration={3500}
                  height={1300}
                  width={1300}
                  scale={0.1}
                  delay={100}
                  ds={svgPath}
                  loop={true}
                />
              </View>
            </View>
            <View style={styles.dataContainer}>
              <View style={styles.row}>
                <View>
                  <Text style={styles.cases}>
                    {worldData.totalCases}
                  </Text>
                  <Text style={styles.text}>
                    Total Cases
                    </Text>
                </View>
                <View>
                  <Text style={styles.deaths}>
                    {worldData.totalDeaths}
                  </Text>
                  <Text style={styles.text}>
                    Total Deaths:
                    </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View>
                  <Text style={styles.recovered}>
                    {worldData.totalRecovered}
                  </Text>
                  <Text style={styles.text}>
                    Total Recovered
                    </Text>
                </View>
                <View>
                  <CovidDataChart dataObj={worldData} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardContinent}>
            <FlatList
              scrollEnabled={false}
              horizontal={false}
              keyExtractor={(_, index) => index.toString()}
              data={continentData}
              renderItem={renderContinents}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default GeneralTab;


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101010"
  },
  cardWorld: {
    borderRadius: 8,
    backgroundColor: '#212121',
    marginHorizontal: 8,
    marginVertical: 20,
    paddingVertical: 20,
    width: (width - 16),
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 3,
  },
  dataContainer: {
    flex: 1,
    width: width,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 32,
  },
  cardContinent: {
    width: width,
  },
  cases: {
    fontSize: 24,
    color: '#ff9500',
    fontWeight: 'bold',
  },
  deaths: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  recovered: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
  text: {
    color: "gray",
  },
})