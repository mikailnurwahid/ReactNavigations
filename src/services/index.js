import { getData } from "../lib/asynstorage"

const bashUrl = 'https://todo-api-omega.vercel.app/api/v1'

export const create = async(path, data)=>{
    const token = await getData('token')

    try {
        let response = await fetch(bashUrl+path, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token && `Bearer ${token}`
            }
        })
    
        let res = await response.json()
        return res
    } catch (error) {
        console.log(error)
    }
}
export const get = async(path)=>{
    const token = await getData('token')
    try {
        let response= await fetch(bashUrl+path,{
            method:'GET',
            headers:{
                'Authorization': token && `Bearer ${token}`
            }
        })
        
        let res = await response.json()
        return res
    } catch (error) {
        console.log(error);
        
    }
}
export const update = async (path,data,isFormData)=>{
    const token = await getData('token')
    try {
        let formData = new FormData()
        formData.append('image', {
            uri: data.path,
            type: data.mime,
            data: data.data,
            name: "image.jpg"
        })

        let response = await fetch(bashUrl+path,{
            method:"PUT",
            body: isFormData ? formData : JSON.stringify(data),
            headers: {
                'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
                'Authorization': token && `Bearer ${token}`
            }

        })
        let res = await response.json()
        console.log(res)
        return res 
    } catch (error) {
        console.log(error)
    }

}
export const destroy = async (path)=>{
    const token = await getData('token')
    try {
        let response = await fetch(bashUrl+path,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization': token && `Bearer ${token}`
            }
        })
        
        let res = await response.json()
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
}

