/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Tab from './components/tab'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      selectedIndex: 1
    }

    this.data = [
      {
        text: "Tab WHAAAA!",
        systemIcon: 'downloads',
        tabName: 'Downloads'
      },
      {
        text: "Tab Two!",
        systemIcon: 'bookmarks',
        tabName: 'Bookmarks'
      },
    ]
  }

  handleTabPress = (index) => {
    console.log("tab pressed")
    this.setState({selectedIndex: index})
  }

  render() {
    let tabs = this.data.map((item, index) => {
      console.log(index)
      console.log(this.state.selectedIndex)
      return (<TabBarIOS.Item 
        systemIcon={item.systemIcon}
        key={item.tabName}
        selected={this.state.selectedIndex === index}
        onPress={this.handleTabPress.bind(this, index)}
        >
        <Tab item={item}/>
      </TabBarIOS.Item>)
      }
    )
    
    return (
      <View style={styles.container}>
        <TabBarIOS tintColor='black'>
          {tabs}
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
