import { View, Text } from 'react-native'
import React from 'react'

export default function Address({navigation}) {
  return (
    <View>
      <Text> screen Address</Text>
      <Text onPress={()=>navigation.goBack()}>navigate to profile</Text>
    </View>
  )
}