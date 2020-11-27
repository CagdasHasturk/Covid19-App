import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { NewsCard } from "../components";
import axios from 'axios';


const NewsTab = ({ navigation }) => {

  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    fetchNewsData();
  }, [])

  const fetchNewsData = async () => {
    let { data } = await axios.get('https://api.collectapi.com/corona/coronaNews', {
      headers: {
        "content-type": "application/json",
        "authorization": "apikey"
      }
    })
    setNewsData(data.result)
  }

  const renderNews = ({ item }) => <NewsCard item={item} navigation={navigation} />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        keyExtractor={(_, index) => index.toString()}
        data={newsData}
        renderItem={renderNews}
      />
    </SafeAreaView>
  )
}

export default NewsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111"
  },
})
