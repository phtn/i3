import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type VideoScreenProps = {
  height?: number;
  width?: number
}
const VideoScreen: FunctionComponent<VideoScreenProps> = ({height, width}) => {
  return (
    <View style={[styles.container]}>
      <Text>Video</Text>
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