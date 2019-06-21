import React, { FunctionComponent, useReducer, useEffect } from "react";
import { View, Button, StyleSheet, Text, ActivityIndicator } from "react-native";
import Toolbar from './toolbar'
import VideoScreen from './video-screen'
import StatusBar from './status-bar'
import DevsComponent from './devs-comp'
import { useObserver } from "mobx-react-lite";

type UserProps = {
  username?: string;
  signOut?: any;
  photoURL: string;
  width: number;
  height: number;
  version?: string
  devs: any
  userData?: any
};



//  SHOP COMP
const Shop = () => {
  return (
    <View style={[{ justifyContent: 'center', flex: 2 }]}>
      <Text>Shop</Text>
    </View>
  )
}

const Loader = () => {
  return (
    <View style={[styles.loader]}>
      <ActivityIndicator size={'large'} color={'#52e3c2'} />
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
  devs,
  userData
}) => {


  const initialState = <Loader />
  const reducer = (state: any, action: string) => {
    switch (action) {
      case 'devs': return <DevsComponent devs={userData} />
      case 'work': return <Shop />
      case 'shop': return <Shop />
      default: return state
    }
  }

  const [windowComponent, setWindowComponent] = useReducer(reducer, initialState)

  const setWindow = (comp: string) => {
    setWindowComponent(comp)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setWindow('devs')
    }, 1500);
    return () => clearTimeout(timer);
  }, [])

  return useObserver(() => (
    <View style={[styles.container, { width, height }]}>

      {/* STATUS BAR */}
      <StatusBar height={height} width={width} photoURL={photoURL} user={username} userData={userData} />

      {/*🤹🏽‍♂️ VIDEO SCREEN 🤹🏽‍♂️*/}
      <VideoScreen />

      {/*⚡️ WINDOW COMPONENTS  ⚡️*/}
      {windowComponent}

      <Toolbar height={height} width={width} setWindow={setWindow} />
      <Button color="#4d505f" title={`${version}`} onPress={() => signOut()} />
    </View>
  ))
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40424f" // 4d505f
  },
  list: {
    justifyContent: 'space-evenly'
  },
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2

  }
});

export default UserScreen;

/*
#393945
#40424f
#4d505f
*/
