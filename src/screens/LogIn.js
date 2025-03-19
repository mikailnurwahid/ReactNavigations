import { View, Text, TouchableOpacity, TextInput, Alert, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { create } from '../services'
import { storeData } from '../lib/asynstorage'

export default function LogIn({navigation}) {
    const [loading, setLoading]=useState(false) 
    const [form, setForm]=useState(
        {
            email:"",
            password:""
        }
    )

    const log_in = async()=>{
        setLoading(true)
        const res = await create('/auth/login/', form)
        setLoading(false)

        if(res.status !== 'success') return ToastAndroid.show(res.message, ToastAndroid.LONG)
            
        storeData('token', res.user.token)
        navigation.replace('Home')
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:"center"}}>
            <View style={{flex: 1, justifyContent: 'center', width:"90%", elevation:7,alignItems:'center', padding:12}}>
              <TextInput style={{height:50,width:"90%", borderRadius:2, marginTop:12, justifyContent:'center', alignItems:'center', fontSize:16}} placeholder='Masukan Nama Account' onChangeText={email=> setForm({...form, email})}></TextInput>
              <TextInput style={{height:50,width:"90%", borderRadius:2,  marginTop:12, justifyContent:'center', alignItems:'center', fontSize:16, borderColor:'black'}} placeholder='Password' onChangeText={password=> setForm({...form, password})}></TextInput>
              <TouchableOpacity style={{height:50,width:"90%", borderRadius:10, backgroundColor:'lightgreen',  marginTop:12, justifyContent:'center', alignItems:'center'}}  onPress={log_in}>
                   {loading ? <ActivityIndicator color='white' size='large' /> : <Text style={{fontSize:32, fontWeight:'bold',color:'white' }}>Log In</Text>}
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', padding:12}}>
                <Text>Don't have any account?</Text>
                <Text style={{color:'blue'}} onPress={() => navigation.navigate("Register")}> Register</Text>
            </View>
        </View>
      )
}