import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { get, update } from '../services'
import ImagePicker from 'react-native-image-crop-picker';
import { imagePickerFromGalery } from '../lib/imagePicker';

export default function Profile({navigation}) {

  const [profile, setProfile]=useState({})
  const [urlImage, setUrlImage]=useState('')


  const ambilProfile = async()=>{
    const res = await get('/profile')

    setProfile(res.user);
    setUrlImage(res.user.avatar.url)
    return res
  }

  const uploadImage= async ()=>{
    let fileImage = await imagePickerFromGalery()
    const res = await update(`/images/${profile.avatar?._id}`,fileImage, true)
    if(res.status !== "success") return ToastAndroid.show(res.message, ToastAndroid.LONG)

    setUrlImage(fileImage.path)
    return res
  }

  useEffect(() => {
    ambilProfile()
  }, [])
  
  
  return (
    <View>
      <Image style={{height:100, width:100,}} source={{uri: urlImage}} onPress={imagePickerFromGalery}/>
      <Text style={{fontSize:20, fontWeight:'500',}} >User Name</Text>
      <Text style={{fontSize:18, fontWeight:'700'}}>{profile.username}</Text>
      <Text style={{fontSize:20, fontWeight:'500',}}>Email</Text>
      <Text style={{fontSize:18, fontWeight:'700'}}>{profile.email}</Text>
      <Text onPress={()=> navigation.goBack()}>Navigate to Home</Text>
      <Text onPress={()=> navigation.navigate("Address")}>Navigate to Address</Text>
      <TouchableOpacity style={{borderWidth:1, borderColor:'blue', height:20}} onPress={uploadImage}/>
    </View>
  )
}