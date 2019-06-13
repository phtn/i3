import React, { FunctionComponent } from 'react'
import { Image, StyleSheet, View } from 'react-native'

type VideoScreenProps = {
  height?: number;
  width?: number
}
const VideoScreen: FunctionComponent<VideoScreenProps> = ({height, width}) => {
  return (
    <View style={[styles.container]}>
      <Image source={require('../assets/light-bulb.png')} style={[{height: 105, width: 200}]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d505f',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
export default VideoScreen