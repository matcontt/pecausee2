import { View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const LoginDetails = () => {
  return (
    <View className="bg-white absolute bottom-0 h-[75%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' dark={false}>Welcom Back</CustomText>
        <CustomText variant='small' dark={false}>Login to your account</CustomText>
    </View>
  )
}

export default LoginDetails