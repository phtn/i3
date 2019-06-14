import React, { FunctionComponent, useReducer } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Toolbar from './toolbar'
import VideoScreen from './video-screen'
import StatusBar from './status-bar'
import DevsComponent from './devs-comp'

type UserProps = {
  username?: string;
  signOut?: any;
  photoURL: string;
  width: number;
  height: number;
  version?: string
  devs: any
};



//  SHOP COMP
const Shop = () => {
  return (
    <View style={[{justifyContent: 'center', flex: 2}]}>
      <Text>Shop</Text>
    </View>
  )
}

// MAIN USER SCREEN
const UserScreen: FunctionComponent<UserProps> = ({
  username,
  signOut,
  photoURL,
  width,
  height,
  version,
  devs
}) => {

  const initialState = <DevsComponent devs={devs} />
  const reducer = (state: any, action: string) => {
    switch(action) {
      case 'devs': return <DevsComponent devs={devs}/>
      case 'work': return <Shop />
      case 'shop': return <Shop />
      default: return state
    }
  }

  const [windowComponent, setWindowComponent] = useReducer(reducer, initialState)

  const setWindow = (comp: string) => {
    setWindowComponent(comp)
  }

  return (
    <View style={[styles.container, { width, height }]}>

      {/* STATUS BAR */}
      <StatusBar height={height} width={width} photoURL={photoURL} user={username}/>
      
      {/*🤹🏽‍♂️ VIDEO SCREEN 🤹🏽‍♂️*/}
      <VideoScreen />

      {/*⚡️ WINDOW COMPONENTS  ⚡️*/}
      {windowComponent}
      
      <Toolbar height={height} width={width} setWindow={setWindow}/>
      <Button color="#4d505f" title={`${version}`} onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40424f" // 4d505f
  },
  list: {
    justifyContent: 'space-evenly'
  }
});

export default UserScreen;

/*
#393945
#40424f
#4d505f
*/
