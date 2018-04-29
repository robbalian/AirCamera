# AirCamera

## Goal ##
Quickly create a React Native app which does the following

-Open app on iPhone 6 or later

-Begin recording a video

-Stop recording

-Watch the last video

-Play / pause playback

-Record a new video

## Video of the App ##
It's probably not worth the time to run on your device...


## How to Run ##
Note: You must run on device since the iOS simulator doesn't have camera access

Roughly follow [React Native "Running on Device" instructions](https://facebook.github.io/react-native/docs/running-on-device.html)

1) Clone this repo
2) Run npm start from the root directory
3) Open the ReactNativeTest.xcodeproj in XCode. Change the code signing team / bundle name to play nicely with your device
4) Run. If the phone doesn't connect to the packager running on your computer, look through troubleshooting in the link above

## Packages ##
[React Native Camera](https://github.com/react-native-community/react-native-camera)

[React Native Video](https://github.com/react-native-community/react-native-video)
