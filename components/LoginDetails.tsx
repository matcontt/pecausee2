import { View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomTextInput from './CustomTextInput'

const LoginDetails = () => {
  return (
    <View className="bg-white absolute bottom-0 h-[75%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' dark={false}>Welcom Back</CustomText>
        <CustomText variant='small' dark={false}>Login to your account</CustomText>
        <View className="w-full mt-8">
            <CustomTextInput placeholder='Full Name' iconName='user'/>
            <CustomTextInput placeholder='••••••••' iconName='lock' isPassword={true}/>
        </View>
    </View>
  )
}

export default LoginDetails