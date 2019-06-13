import React, { FunctionComponent, useEffect, useReducer } from "react";
import { View, Button, StyleSheet, ActivityIndicator, Text } from "react-native";

type SignInProps = {
  signIn: any;
  width: number;
  height: number;
  connectionStatus: string
};

type SignInButtonProps = {
  signIn: any;
  connectionStatus: string
};



const Loading = () => {
  return <ActivityIndicator size="small" color="#52e3c2" />;
};

const SignInButton: FunctionComponent<SignInButtonProps> = ({ signIn, connectionStatus }) => {
  return (
    <Button
      color="#4d505f"
      title={`${connectionStatus}`}
      onPress={() => {
        signIn()
      }}
      accessibilityLabel="Sign in to your Github account to continue."
    />
  );
};



const SignInScreen: FunctionComponent<SignInProps> = ({
  signIn,
  connectionStatus,
  width,
  height
}) => {

  const initialState = <Loading />;
  const reducer = (state: any, action: string) => {
    switch (action) {
      case "signIn":
        return <SignInButton signIn={signIn} connectionStatus={connectionStatus}/>;
      case "loading": 
        return <Loading />
      default:
        return state;
    }
  };
  const [comp, setComp] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComp("signIn");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  
 
  return (
    <View style={[styles.signInScreenStyle, { width, height }]}>

      

      <View style={{height: 50, justifyContent: 'center'}}>
        <Text style={[styles.title]} >Idle Devs </Text>
        <audio src={require('../assets/sounds/intro.mp3')} autoPlay />
      </View>
      
      <View style={{height: 50, justifyContent: 'center'}}>
        {comp}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  signInScreenStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#40424f",
  },
  title: {
    fontSize: 20,
    fontFamily: 'Quicksand, sans-serif',
    color: '#ed8a19',
  }
});

export default SignInScreen;
