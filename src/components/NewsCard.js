import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, } from 'react-native'


const NewsCard = ({ item, navigation }) => {

  const goToNewDetailsPage = () => {
    navigation.navigate('News Details', { item: item })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} borderRadius={8}></Image>
      <TouchableOpacity style={styles.dataContainer} onPress={goToNewDetailsPage}>
        <Text style={styles.headerText}>{item.name}</Text>
        <Text style={styles.descriptionText} numberOfLines={3}>{item.description}</Text>
        <Text style={styles.sourceText}>{item.source}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewsCard;


const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    margin: 8,
    paddingTop: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  image: {
    width: (width - 48),
    height: height / 4,
  },
  dataContainer: {
    marginTop: 16,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 18,
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#dddddd90',
    lineHeight: 20,
    marginBottom: 8,
  },
  sourceText: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: "bold",
    color: '#dddddd90',
  },
})