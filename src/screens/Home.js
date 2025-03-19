import { View, Text, ScrollView, TouchableOpacity, Alert, TextInput, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { create, destroy, get, update } from '../services'
import G from '@react-native-vector-icons/octicons'

export default function Home({navigation}) {

  const [dusun,setDusun]=useState([])
  const [form,setForm]=useState({
    title:'',
    desc:'',
    loading:false,
    statusTambah : true,
    id : '',
  })

  const ambilDusun = async()=>{
    const res = await get('/todos/')
    
    setDusun(res.data.todos);
    return res
  }

  const tambahForm= async()=>{
    setForm({...form, loading:true})
    let res = await create('/todos/', form)
    setForm({title:'',desc:'',loading:false})

    if (res.status!=='success') return ToastAndroid.show(res.message, ToastAndroid.LONG)
    ambilDusun()
  }

  const deltodo = (id) =>
    Alert.alert('Hapus Todo', 'Yakin???', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: async () => {
        await destroy(`/todos/${id}`)
        ambilDusun()
      }}
    ]);
  
  const edit= async()=>{
    setForm({...form, loading:true})
    let res = await update(`/todos/${form.id}`,form, false)
    setForm({title:'',desc:'',loading:false, statusTambah:true})
    
    if (res.status!=='success') return ToastAndroid.show(res.message, ToastAndroid.LONG)
    ambilDusun()
    
    return res
  }
useEffect(() => {
  ambilDusun()
}, [])


  return (
    <View style={{flex: 1, margin: 24}}>
      <ScrollView>
        {dusun.map((v, i) => (

            <TouchableOpacity key={i} style={{padding: 12, borderWidth: 1, borderColor: 'red', borderRadius: 5, marginVertical: 6, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={{textAlign: 'center'}}>{v?.title}</Text>
              <View style={{flexDirection:'row',}}>
                <TouchableOpacity style={{marginHorizontal:5}} onPress={()=>deltodo(v?._id)}>
                <G name='trash' size={30} color='lightblue' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setForm({...form, title:v.title, desc:v.desc, statusTambah:false, id:v._id})} style={{marginHorizontal:5}} >
                <G name='pencil' size={30} color='lightblue' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
           
  
        ))}
      </ScrollView>
      <TextInput value={form.title} placeholder='title' onChangeText={(title)=>setForm({...form, title})}/>
      <TextInput value={form.desc}placeholder='desc' onChangeText={(desc)=>setForm({...form, desc})}/>
      <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 16, borderWidth: 1, borderColor: 'red', borderRadius: 5}} onPress={form.statusTambah? tambahForm : edit}>
        { form.loading? <ActivityIndicator color='blue' size='large' /> : <Text>{form.statusTambah? 'Tambah ToDo++' :" Edit Todo++"}</Text>}
      </TouchableOpacity>
    </View>
  )
}