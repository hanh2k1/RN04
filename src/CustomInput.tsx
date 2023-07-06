import { Text, View, label } from 'react-native'
import React from 'react'

type CustomInputProps ={
    label: string
}
const CustomInput: JSX.Element<CustomInputProps> =({label: string}) =>{
    return(
        <View>
            <Text>
                {label}
            </Text>
        </View>
    )

}
export default CustomInput;