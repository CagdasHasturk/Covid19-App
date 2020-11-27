import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import CountryModal from './CountryModal';

const CountryCard = ({ item }) => {

  const [isVisible, setIsVisible] = useState(false)

  const toggleModal = () => setIsVisible(!isVisible);

  return (
    <TouchableOpacity style={styles.container} onPress={toggleModal}>
      <CountryModal data={item} toggleModal={toggleModal} isVisible={isVisible} />

      <View style={styles.dataContainer}>
        <View style={styles.row}>
          <Text style={styles.headerText}>{item.country}</Text>
          <View style={[styles.row, { marginBottom: 0 }]}>
            <Text style={styles.text}>(Total Deaths)</Text>
            <Text style={styles.primaryText}>{item.totalDeaths}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.dataColumn}>
            <Text style={[styles.numberText, styles.dangerText]}>{item.newDeaths ? item.newDeaths : '-'}</Text>
            <Text style={styles.text}>New Deaths</Text>
          </View>
          <View style={styles.dataColumn}>
            <Text style={[styles.numberText, styles.warningText]}>{item.newCases ? item.newCases : '-'}</Text>
            <Text style={styles.text}>New Cases</Text>
          </View>
          <View style={[styles.dataColumn, { alignItems: 'flex-end' }]}>
            <Text style={styles.numberText}>{item.totalCases}</Text>
            <Text style={styles.text}>Total Cases</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default CountryCard;


const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: (width - 16),
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#212121",
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dataColumn: {
    flex: 1,
  },
  text: {
    color: "gray",
    fontSize: 12,
  },
  numberText: {
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold',
  },
  warningText: {
    color: '#ff9500'
  },
  dangerText: {
    color: 'red'
  },
  successText: {
    color: 'green'
  },
  primaryText: {
    color: 'red',
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "red",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 5,
    elevation: 5,
    marginLeft: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#fff'
  }
})