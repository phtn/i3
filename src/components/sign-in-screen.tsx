import React, { FunctionComponent, useEffect, useReducer } from "react";
import { View, Button, StyleSheet, ActivityIndicator } from "react-native";

type SignInProps = {
  signIn: any;
  width: number;
  height: number;
};

type SignInButtonProps = {
  signIn: any;
};

const Loading = () => {
  return <ActivityIndicator size="small" color="#4d505f" />;
};

const SignInButton: FunctionComponent<SignInButtonProps> = ({ signIn }) => {
  return (
    <Button
      // color="#40424f"
      color="#4d505f"
      title="Continue with Github"
      onPress={() => signIn()}
      accessibilityLabel="Sign in to your Github account to continue."
    />
  );
};

const SignInScreen: FunctionComponent<SignInProps> = ({
  signIn,
  width,
  height
}) => {
  
  const initialState = <Loading />;
  const reducer = (state: any, action: string) => {
    switch (action) {
      case "signIn":
        return <SignInButton signIn={signIn} />;
      default:
        return state;
    }
  };
  const [comp, setComp] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line
      setComp("signIn");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.signInScreenStyle, { width, height }]}>{comp}</View>
  );
};

const styles = StyleSheet.create({
  signInScreenStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "papayawhip"
  }
});

export default SignInScreen;
