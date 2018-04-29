import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import VideoRecorder from './VideoRecorder'

const Tab = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.item.text}</Text>
      <Text style={styles.instructions}>{props.item.text}</Text>
      <VideoRecorder style={{flex:1}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});


export default Tab