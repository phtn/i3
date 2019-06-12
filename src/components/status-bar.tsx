import React, { FunctionComponent } from "react";
import { View, Image, StyleSheet, Text } from "react-native";


type StatusBarProps = {
  height: number;
  photoURL: string;
  width: number;
  user: any
};
const StatusBar: FunctionComponent<StatusBarProps> = ({
  height,
  width,
  photoURL,
  user
}) => {
  return (
    <View style={[styles.container, { height: height * 0.1 }]}>

      <View>
        <Image // PHOTO
          style={{ width: height * 0.1, height: height * 0.1 }}
          source={{ uri: photoURL }}
        />
      </View>


      <View style={[styles.statusContainer, {height: height * 0.1, width: 100}]}>
        <Text style={[styles.username]}>{user}</Text>
        <View style={[styles.coinsRow]}>
          <Image source={require('../assets/dollar.png')} style={[{height: 15, width: 15}]} />
          <Text style={[styles.coins]}>42</Text>
        </View>
        <Text style={[styles.level]}>Lv.  1</Text>
      </View>
      
      
      <View style={[styles.rightSideStatus]}>
      <Text style={{color: 'blue'}}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#393945",
    flexDirection: 'row',
    // elevation: 3
  },
  statusContainer: {
    flexDirection: 'column',
    backgroundColor: '#393945',
    paddingLeft: 10,
    paddingTop: 5,
    justifyContent: 'space-around'
  },
  rightSideStatus: {
    flex: 1,
    backgroundColor: '#393945'
  },
  username: {
    color: '#52e3c2',
    fontSize: 10,
    fontFamily: 'Quicksand, sans-serif'
  },
  coinsRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  coins: {
    color: '#ed8a19',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '900',
  },
  level: {
    fontSize: 8,
    // color: '#ff4b12'
    color: '#546e7a'
  }
});
export default StatusBar;
