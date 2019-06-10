import { useObserver } from "mobx-react-lite";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from "react";
import { View } from "react-native";
import UserScreen from "./components/user-screen";
import SignInScreen from "./components/sign-in-screen";
import { AppStore } from "./observables/data";

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

  // CHECK IF LOGGED IN
  appCtx.checkAuthState();

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

export default HomeScreen;
