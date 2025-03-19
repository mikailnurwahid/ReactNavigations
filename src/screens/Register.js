import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Register({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:"center"}}>
            <View style={{flex: 1, justifyContent: 'center', width:"90%", elevation:7,alignItems:'center'}}>
              <TextInput style={{height:50,width:"90%", borderRadius:2, marginTop:12, justifyContent:'center', alignItems:'center', fontSize:18,}} placeholder='Masukan Nama Account'></TextInput>
              <TextInput style={{height:50,width:"90%", borderRadius:2,  marginTop:12, justifyContent:'center', alignItems:'center', fontSize:18, borderColor:'black'}} placeholder='Password'></TextInput>
              <TextInput style={{height:50,width:"90%", borderRadius:2,  marginTop:12, justifyContent:'center', alignItems:'center', fontSize:18, borderColor:'black'}} placeholder='Konfirmasi Password'></TextInput>
              <TouchableOpacity style={{height:50,width:"90%", borderRadius:10, backgroundColor:'blue',  marginTop:12, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:32, fontWeight:'bold',color:'white' }} onPress={() => navigation.navigate("Home")}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
}