import React from 'react'
import { PieChart } from 'react-native-svg-charts'

const CovidDataChart = ({ dataObj }) => {

  const convertDataToNumberArray = (dataObj) => {
    let numberArray = [];
    for (data in dataObj) {
      numberArray.push((Number(dataObj[data].replace(/,|\u002b/g, ''))))
    }
    return numberArray;
  }

  let data = convertDataToNumberArray(dataObj);

  const colors = ['#f44336', '#ff9500', '#0f0']

  const pieData = data
    .map((value, index) => ({
      value,
      svg: {
        fill: colors[index],
      },
      key: `pie-${index}`,
    }))

  return <PieChart style={{ height: 90, width: 120 }} data={pieData} />
}

export default CovidDataChart;