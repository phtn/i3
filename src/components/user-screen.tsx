import React, { FunctionComponent } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";
import Toolbar from './toolbar'
import VideoScreen from './video-screen'
import StatusBar from './status-bar'

type UserProps = {
  username?: string;
  signOut?: any;
  photoURL: string;
  width: number;
  height: number;
  version?: string
};

const data = [
  { name: "Dan" },
  { name: "Seb" },
  { name: "Andrew" },
  { name: "Sophie" }
];

const UserScreen: FunctionComponent<UserProps> = ({
  username,
  signOut,
  photoURL,
  width,
  height,
  version
}) => {
  const _keyExtractor = (item?: any) => item.name;

  return (
    <View style={[styles.container, { width, height }]}>

      {/* STATUS BAR */}
      <StatusBar height={height} width={width} photoURL={photoURL} user={username}/>
      
      <VideoScreen />

      <View style={{ flex: 2 }}>
        <FlatList
          keyExtractor={_keyExtractor}
          data={data}
          renderItem={({ item }) => (
            <Button
              title={`${item.name}`}
              onPress={() => window.console.log(item.name)}
            />
          )}
        />
      </View>
      
      <Toolbar height={height} width={width} />
      <Button color="#4d505f" title={`${version}`} onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40424f" // 4d505f
  },
});

export default UserScreen;

/*
#393945
#40424f
#4d505f
*/
