import React, { FunctionComponent } from "react";
import { View, Button, Image, StyleSheet, FlatList } from "react-native";
import Toolbar from './toolbar'
import VideoScreen from './video-screen'

type UserProps = {
  userName?: string;
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
  userName,
  signOut,
  photoURL,
  width,
  height,
  version
}) => {
  const _keyExtractor = (item?: any) => item.name;

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.statusBar, { height: height * 0.1 }]}>
        <Image
          style={{ width: height * 0.1, height: height * 0.1 }}
          source={{ uri: photoURL }}
        />
      </View>
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
  statusBar: {
    backgroundColor: "#393945",
    elevation: 3
  }
});

export default UserScreen;

/*
#393945
#40424f
#4d505f
*/
