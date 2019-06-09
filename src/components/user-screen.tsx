import React, { FunctionComponent } from 'react'
import { View, Button, Image, StyleSheet, FlatList } from 'react-native';

type UserProps = {  
  userName: string;
  signOut: any;
  photoURL: string;
  width: number;
  height: number;
}

const data = [
  {name: 'Dan'},
  {name: 'Seb'},
  {name: 'Andrew'},
  {name: 'Sophie'}
]

const UserScreen: FunctionComponent<UserProps> = ({userName, signOut, photoURL, width, height}) => {

  return (
    <View style={[styles.container, {width, height}]}>
      <View style={[styles.navbar, {height: height * 0.1}]}>
        <Image style={{width: height * 0.1, height: height * 0.1}} source={{uri: photoURL}} />  
      </View>
      <View style={{flex: 1}}>
        <FlatList 
          data={data}
          renderItem={({item}) => <Button title={`${item.name}`} onPress={() => window.console.log(item.name)} />}
        />
      </View>
      <Button color='#4d505f' title={`${userName}`} onPress={() => signOut()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#40424f' // 4d505f 
  },
  navbar: {
    backgroundColor: '#393945'
  }
})

export default UserScreen

/*
#393945
#40424f
#4d505f
*/