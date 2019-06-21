import { useObserver } from "mobx-react-lite";
import { autorun } from 'mobx'

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
  autorun(() => {
    appCtx.checkAuthState()
    appCtx.fetchDevs()
    appCtx.fetchUserData()
  })
  // autorun(() => )
  
  // window.console.log(appCtx.userData)

  


  return useObserver(() => (
    <View style={[{ flex: 1 }]}>
      {appCtx.user !== "" ? (
        <UserScreen
          height={height}
          photoURL={appCtx.photoURL}
          signOut={appCtx.signOut}
          username={appCtx.user}
          version={appCtx.version}
          width={width}
          devs={appCtx.userData}
          userData={appCtx.userData}
        />
      ) : (
        <View style={{ flex: 3 }}>
          <SignInScreen
            signIn={appCtx.signInWithGithub}
            connectionStatus={appCtx.connectionStatus}
            width={width}
            height={height}
          />
        </View>
      )}
    </View>
  ));
};

export default HomeScreen;
