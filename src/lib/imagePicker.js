import ImageCropPicker from "react-native-image-crop-picker";

export const imagePickerFromGalery = async () => {
    try {
        let image = await ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
          })
        return image   
    } catch (error) {
        console.log(error)
    }
}