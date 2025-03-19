import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getData } from '../lib/asynstorage'

export default function FaceScreen({navigation}) {

    const checkToken = async() => {
        const token = await getData('token')
        if(!token) return navigation.replace('LogIn')
        navigation.replace('Home')
    }

    useEffect(() => {
        checkToken()
    }, [])

  return (
    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <Text>Selamat datang</Text>
    </View>
  )
}