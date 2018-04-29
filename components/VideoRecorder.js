import React from 'react'
import { View, StyleSheet, Button} from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class VideoRecorder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRecording: false
    }
    this.videoURIChanged = props.videoURIChanged
  }

  recordVideo = async function() {
    if (this.camera) {
      const options = { quality: RNCamera.Constants.VideoQuality['1080p'] }
      this.setState({isRecording: true})
      this.camera.recordAsync(options).then((videoObject) => {
        console.log("stopped recording")
        console.log(videoObject.uri)
        this.setState({isRecording : false})
        this.videoURIChanged(videoObject.uri)
      }).catch((error) => console.log(error))
    }
  };

  handleRecordButtonPressed = () => {
    if (this.state.isRecording) {
      this.camera.stopRecording()
    } else {
      this.recordVideo()
    }
  }

  render() {
    let recordButtonTitle = this.state.isRecording ? 'Stop' : 'Record Video'

    return (
      <View style={styles.container}>
        <RNCamera 
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          captureAudio={true}
          onCameraReady={() => {}}
          flashMode={RNCamera.Constants.FlashMode.off}
        >
          <Button onPress={this.handleRecordButtonPressed} title={recordButtonTitle} />
        </RNCamera>
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
    alignItems: 'center',
    paddingBottom: 30
  }
});