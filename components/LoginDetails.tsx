import { View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomTextInput from './CustomTextInput'
import { Feather } from '@expo/vector-icons';
import CustomButton from './CustomButton';

const LoginDetails = () => {
  return (
    <View className="bg-white absolute bottom-0 h-[75%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' dark={false}>Welcom Back</CustomText>
        <CustomText variant='small' dark={false}>Login to your account</CustomText>
        <View className="w-full mt-8">
            <CustomTextInput placeholder='Full Name' iconName='user'/>
            <CustomTextInput placeholder='••••••••' iconName='lock' isPassword={true}/>
        </View>
        <View className="flex-row justify-between w-full mt-2">
            <View className="flex-row items-center">
                <Feather name="check-circle" size={20} color="#82A387" />
                <CustomText variant='small' dark={false}>Remember Me</CustomText>
            </View>
            <CustomText variant='small' dark={false}>Forgot Password?</CustomText>
        </View>
        <CustomButton label='Login' />
    </View>
  )
}

export default LoginDetails
