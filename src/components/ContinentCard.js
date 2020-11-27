import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native";


const ContinentCard = ({ item, icon }) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
        <Text style={styles.headerText}>{item.continent}</Text>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.row}>
          <View style={styles.dataColumn}>
            <Text style={[styles.numberText, styles.dangerText]}>{item.totalDeaths}</Text>
            <Text style={styles.text}>Total Deaths</Text>
          </View>
          <View style={[styles.dataColumn, { alignItems: 'flex-end' }]}>
            <Text style={[styles.numberText, styles.dangerText]}>{item.newDeaths ? item.newDeaths : '-'}</Text>
            <Text style={styles.text}>New Deaths</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.dataColumn}>
            <Text style={[styles.numberText, styles.warningText]}>{item.totalCases}</Text>
            <Text style={styles.text}>Total Cases</Text>
          </View>
          <View style={[styles.dataColumn, { alignItems: 'flex-end' }]}>
            <Text style={[styles.numberText, styles.warningText]}>{item.newCases ? item.newCases : '-'}</Text>
            <Text style={styles.text}>New Cases</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.dataColumn}>
            <Text style={[styles.numberText, styles.successText]}>{item.totalRecovered}</Text>
            <Text style={styles.text}>Total Recovered</Text>
          </View>
          <View style={[styles.dataColumn, { alignItems: 'flex-end' }]}>
            <Text style={styles.numberText}>{item.activeCases}</Text>
            <Text style={styles.text}>Active Cases</Text>
          </View>
        </View>
      </View>
    </View>

  );
}

export default ContinentCard;


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    width: (width - 16),
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#212121',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  dataContainer: {
    flex: 1.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10,
  },
  dataColumn: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerText: {
    color: 'red',
    fontSize: 16,
    fontWeight: "500",
    textShadowColor: "red",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 5,
    elevation: 5,
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
  }
})