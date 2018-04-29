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
  View
} from 'react-native';

import VideoRecorder from './components/VideoRecorder'
import VideoPlayback from './components/VideoPlayback'


type Props = {};

const MODES = {
  RECORD: 0,
  PLAYBACK: 1
}

export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      mode : MODES.RECORD,
      lastVideoURI: null,
    }
  }

  renderComponent = () => {
    switch(this.state.mode) {
      case MODES.RECORD:
        return (
          <VideoRecorder 
            videoURIChanged = {(videoURI) => {
              this.setState({
                lastVideoURI: videoURI,
                mode : MODES.PLAYBACK
              })
            }}
          />
        )
      case MODES.PLAYBACK:
        return (
          <VideoPlayback 
            videoURI = {this.state.lastVideoURI}
            onFinishedViewing = {() => this.setState({mode: MODES.RECORD})}
          />
        )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
