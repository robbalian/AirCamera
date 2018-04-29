import React from 'react'
import { View, StyleSheet, Button} from 'react-native'
import { RNCamera } from 'react-native-camera'
import Video from 'react-native-video'

export default class VideoRecorder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRecording: false,
      lastVideoURI: null,
    }

  }

  recordVideo = async function() {
    if (this.camera) {
      const options = { quality: RNCamera.Constants.VideoQuality['1080p'] }
      this.setState({isRecording: true})
      this.camera.recordAsync(options).then((videoObject) => {
        console.log("stopped recording")
        console.log(videoObject.uri)
        this.setState({ lastVideoURI: videoObject.uri })
      }).catch((error) => console.log(error))
    }
  };

  handleRecordButtonPressed = () => {
    if (this.state.isRecording) {
      this.camera.stopRecording()
      this.setState({isRecording : false})
    } else {
      this.recordVideo()
    }
  }

  render() {
    let recordButtonTitle = this.state.isRecording ? 'Stop' : 'Record Video'
    

    return (
      <View style={styles.container}>
        <Button onPress={this.handleRecordButtonPressed} title={recordButtonTitle} />

        {this.state.lastVideoURI == null ? 
        <RNCamera 
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={true}
          captureAudio={true}
          onCameraReady={() => {}}
          flashMode={RNCamera.Constants.FlashMode.off}
        />
        :
        <Video
         repeat={true}
         style={styles.player}
         source={{uri: this.state.lastVideoURI}}
         ref={(ref) => {
           this.player = ref
         }}
        />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview : {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  player: {
    flex: 1
  }
});