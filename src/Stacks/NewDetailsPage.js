import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Linking,
  StyleSheet,
  Dimensions
} from 'react-native'

const NewDetailsPage = (props) => {

  let { item } = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
          borderRadius={8}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.headerText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.sourceText}>{item.source}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text style={styles.buttonText}>More</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewDetailsPage;


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    padding: 16,
  },
  image: {
    marginVertical: 16,
    width: (width - 32),
    height: height / 3,
  },
  dataContainer: {
    marginBottom: 16,
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 18,
    letterSpacing: 1.1,
    marginBottom: 16,
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
  button: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})