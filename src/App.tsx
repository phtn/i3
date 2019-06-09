import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent
} from "react";
import { useObserver } from "mobx-react-lite";
import { View, Button, StyleSheet } from "react-native";
import { AppStore } from "./observables/data";
import UserScreen from "./components/user-screen";

// types
type SignInProps = {
  signIn: any;
  width: number;
  height: number;
};
type UserProps = {
  user: string;
  signOut: any;
};

// eslint-disable-next-line
function log(arg: any) {
  window.console.log(arg);
}

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const HomeScreen: FunctionComponent = () => {
  const [width, setWidth] = useState(WIDTH);
  const [height, setHeight] = useState(HEIGHT);

  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    const handleHeightResize = () => setHeight(window.innerHeight);

    window.addEventListener("resize", handleWidthResize);
    window.addEventListener("resize", handleHeightResize);

    return () => {
      window.removeEventListener("resize", handleWidthResize);
      window.removeEventListener("resize", handleHeightResize);
    };
  }, []);

  // LOAD DATA

  const appCtx = useContext(AppStore);

  appCtx.checkAuthState();

  // log(appCtx.photoURL)

  //

  return useObserver(() => (
    <View style={[{ flex: 1 }]}>
      {appCtx.user !== "" ? (
        <UserScreen
          userName={appCtx.user}
          signOut={appCtx.signOut}
          photoURL={appCtx.photoURL}
          width={width}
          height={height}
        />
      ) : (
        <View style={{ flex: 3 }}>
          <SignInScreen
            signIn={appCtx.signInWithGithub}
            width={width}
            height={height}
          />
        </View>
      )}
    </View>
  ));
};

const SignInScreen: FunctionComponent<SignInProps> = ({
  signIn,
  width,
  height
}) => {
  return useObserver(() => (
    <View style={[styles.signInScreenStyle, { width, height }]}>
      <Button
        // color="#40424f"
        color="#4d505f"
        title="Continue with Github"
        onPress={() => signIn()}
        accessibilityLabel="Sign in to your Github account to continue."
      />
    </View>
  ));
};

// const UserScreen: FunctionComponent<UserProps> = ({ user, signOut }) => {
//   return (
//     <View>
//       <Button title={`sign out as ${user}`} onPress={() => signOut()} />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  signInScreenStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "papayawhip"
  }
});

export default HomeScreen;
