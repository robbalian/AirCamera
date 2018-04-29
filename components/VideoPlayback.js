import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import Video from 'react-native-video'

export default class VideoPlayback extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paused: false
    }
    this.onFinishedViewing = this.props.onFinishedViewing
  }

  handleRecordAgainPress = () => {
    this.onFinishedViewing()
  }

  handlePlayPausePress = () => {
    this.setState({paused: !this.state.paused})
  }

  render() {
    let playPauseButton = <Button onPress={this.handlePlayPausePress} title={this.state.paused ? "Play" : "Pause"} />
    
    return (
      <Video
       repeat={true}
       style={styles.player}
       source={{uri: this.props.videoURI}}
       paused={this.state.paused}
       ref={(ref) => {
         this.player = ref
       }}
      >
        <View style={styles.buttons}>
          {playPauseButton}
          <Button onPress={this.handleRecordAgainPress} title="Record Again" />
        </View>
      </Video>
    )
  }
}

const styles = StyleSheet.create({
  player: {
    flex: 1
  },
  buttons : {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30
  }
});