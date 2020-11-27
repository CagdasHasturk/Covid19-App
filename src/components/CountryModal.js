import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';
import CovidDataChart from "./CovidDataChart";

const CountryModal = ({ data, toggleModal, isVisible }) => {

  const dailyData = { deaths: data.newDeaths, cases: data.newCases }

  return (
    <Modal style={styles.modalContainer} isVisible={isVisible} onBackdropPress={toggleModal}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.countryText}>{data.country}</Text>
          </View>
          <View style={styles.column}>
            <Text style={[styles.primaryText, styles.dangerText]}>{data.totalDeaths}</Text>
            <Text style={styles.text}>Total Death</Text>
          </View>
        </View>
        <View style={[styles.row, styles.dailyReportContaniner]}>
          <View>
            <Text style={[styles.dailyReportText, { marginBottom: 16, }]}>Daily Report</Text>
            <View style={styles.markerColumn}>
              <View style={[styles.marker, { backgroundColor: '#f00' }]} />
              <View>
                <Text style={styles.dailyReportText}>{data.newDeaths ? data.newDeaths : '-'}</Text>
                <Text style={styles.text}>New Deahts</Text>
              </View>
            </View>
            <View style={styles.markerColumn}>
              <View style={[styles.marker, { backgroundColor: '#ff9500' }]} />
              <View>
                <Text style={styles.dailyReportText}>{data.newCases ? data.newCases : '-'}</Text>
                <Text style={styles.text}>New Cases</Text>
              </View>
            </View>
            <View style={styles.markerColumn}>
              <View style={styles.marker} />
              <View>
                <Text style={styles.dailyReportText}>{data.activeCases ? data.activeCases : '-'}</Text>
                <Text style={styles.text}>Active Cases</Text>
              </View>
            </View>
          </View>
          <CovidDataChart dataObj={dailyData} />
        </View>
        <View style={styles.row}>
          <View>
            <Text style={[styles.primaryText, styles.warningText]}>{data.totalCases}</Text>
            <Text style={styles.text}>Total Cases</Text>
          </View>
          <View style={styles.column}>
            <Text style={[styles.primaryText, styles.successText]}>{data.totalRecovered}</Text>
            <Text style={styles.text}>Total Recovered</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Hide</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default CountryModal;


const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#212121'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 32,
  },
  column: {
    alignItems: 'flex-end'
  },
  dailyReportContaniner: {
    margin: -8,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#111'
  },
  markerColumn: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 8,
    marginRight: 8,
  },
  countryText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    color: 'gray',
    fontSize: 12,
  },
  dailyReportText: {
    fontSize: 16,
    color: '#fff'
  },
  primaryText: {
    fontSize: 21,
    fontWeight: 'bold'
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
  button: {
    backgroundColor: '#111',
    padding: 8,
    borderRadius: 8,
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center'
  }


})