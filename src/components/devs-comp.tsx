import React from 'react'
import { View, FlatList, Button, StyleSheet, Text } from 'react-native'

const data = [
    { name: "Dan Abramov @gaeron" },
  ];
  
  // DEVS COMP
  const DevsComponent = () => {
    const _keyExtractor = (item?: any) => item.name;
    return (
      <View style={{ flex: 2 }}>
        <FlatList
          keyExtractor={_keyExtractor}
          data={data}
          renderItem={({ item }) => (
            <View style={[styles.panel]}>
              <Button
              title={`${item.name}`}
              onPress={() => window.console.log(item.name)}
            />
            <View style={{flex: 1}}><Text>Status</Text></View>
            <Button
              title={`collect`}
              color='gray'
              onPress={() => window.console.log(item.name)}
            />
            </View>
          )}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    panel: {
      height: 100,
      backgroundColor: 'tomato',
      flexDirection: 'row'
    }
  })
  export default DevsComponent