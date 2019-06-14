import React, { useState } from 'react'
import { View, FlatList, Button, StyleSheet, Text, Image } from 'react-native'

const data = [
    { name: "Emma", id: '@EmmaWedekind', img: 'https://pbs.twimg.com/profile_images/1135263839543537664/91rCpayn_400x400.jpg' },
    { name: "Ali", id: '@ASpittel', img: 'https://pbs.twimg.com/profile_images/1112797913372155904/Yg94Zz8-_400x400.png' },
    { name: "Kelly", id: '@kvlly', img: 'https://pbs.twimg.com/profile_images/1134881029100101635/NVj8aj1k_400x400.jpg' },
  ];
  
  // DEVS COMP
  const DevsComponent = () => {
    const _keyExtractor = (item?: any) => item.name;

    const [ collect, setCollect ] = useState(false)

    const toggleCollect = () => {
      setCollect(c => !c)
      window.console.log(collect)
    }

    return (
      <View style={{ flex: 2, backgroundColor: '#222'  }}>
        <FlatList
          keyExtractor={_keyExtractor}
          data={data}
          renderItem={({ item }) => (
            
            // PANEL
            <View style={[styles.panel]}>

            {/* DEV  */}
            <View style={[{margin: 0, alignItems: 'center', justifyContent: 'center'}]}>
              <Image source={{ uri: item.img}} style={[styles.devImage]} />
            </View>
            

            <View style={[styles.panelStatus]}>
              <Text style={[{fontFamily: 'Quicksand, sans-serif', fontSize: 11,color: '#52e3c2'}]} >{`${item.id}`}</Text>
              <Text style={[{fontFamily: 'Quicksand, sans-serif', fontSize: 11,color: '#ed8a19'}]} >4000</Text>
              <Text style={[{fontSize: 10 ,color: '#546e7a'}]} >5s</Text>
            </View>
            <View style={[{margin: 5, alignItems: 'center', justifyContent: 'center'}]}>
              <Button
                title={collect ? '✔️' : '</>'}
                color='gray'
                onPress={() => toggleCollect()}
              />
            </View>
            </View>
          )}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    panel: {
      height: 55,
      backgroundColor: '#393945',
      flexDirection: 'row',
      padding: 2,
      justifyContent: 'space-between',
      borderBottomWidth: 0.1,
      borderColor: '#546e7a'
    },
    devImage: {
      height: 51,
      width: 51
    },
    panelStatus: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingLeft: 10
    }
  })
  export default DevsComponent