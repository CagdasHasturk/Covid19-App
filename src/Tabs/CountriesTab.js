import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, } from "react-native";
import { CountryCard } from "../components";
import axios from "axios";


const CountriesTab = () => {

  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let { data } = await axios.get('https://api.collectapi.com/corona/countriesData', {
      headers: {
        "content-type": "application/json",
        "authorization": "[apikey]"
      }
    })
    setCountryList(data.result)
  }

  const renderCountries = ({ item }) => {
    return (<CountryCard item={item} />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        keyExtractor={(_, index) => index.toString()}
        data={countryList}
        renderItem={renderCountries}
        initialNumToRender={7}
      />
    </SafeAreaView>
  )
}

export default CountriesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010"
  },
  row: {
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: {
    color: "red",
  },
})