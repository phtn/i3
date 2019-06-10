import React, { FunctionComponent } from 'react'
import { Button, StyleSheet, View  } from 'react-native'

type ToolbarProps = {
  height: number;
  width: number
}
const Toolbar: FunctionComponent<ToolbarProps> = ({height, width}) => {
  return (
    <View style={[styles.container, {height: height * 0.1, width}]}>
      <Button title='Devs' color='#4d505f' onPress={() => window.console.log('Devs')} />
      <Button title='Machine' color='#4d505f' onPress={() => window.console.log('Devs')} />
      <Button title='Coins' color='#4d505f' onPress={() => window.console.log('Devs')} />
      <Button title='Settings' color='#4d505f' onPress={() => window.console.log('Devs')} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393945',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
export default Toolbar