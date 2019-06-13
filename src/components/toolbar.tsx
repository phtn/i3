import React, { FunctionComponent } from 'react'
import { Button, StyleSheet, View  } from 'react-native'

type ToolbarProps = {
  height: number;
  width: number;
  setWindow: any;
}
const Toolbar: FunctionComponent<ToolbarProps> = ({height, width, setWindow}) => {
  return (
    <View style={[styles.container, {height: height * 0.1, width}]}>
      <Button title='Devs' color='#4d505f' onPress={() => setWindow('devs')} />
      <Button title='Workstation' color='#4d505f' onPress={() => setWindow('work')} />
      <Button title='Shop' color='#4d505f' onPress={() => setWindow('shop')} />
      
      
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