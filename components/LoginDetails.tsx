import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomTextInput from './CustomTextInput'
import { Feather } from '@expo/vector-icons';
import CustomButton from './CustomButton';

interface LoginDetailsProps {
    fullName: string;
    setFullName: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    rememberMe: boolean;
    setRememberMe: (value: boolean) => void;
    onLoginPress: () => void;
    onForgotPress: () => void;
    onSignUpPress: () => void;
}

const LoginDetails = ({ 
    fullName, 
    setFullName, 
    password, 
    setPassword, 
    rememberMe, 
    setRememberMe, 
    onLoginPress, 
    onForgotPress, 
    onSignUpPress 
}: LoginDetailsProps) => {
  return (
    <View className="bg-white absolute bottom-0 h-[75%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' className='text-[#355D49] font-bold'>Welcom Back</CustomText>
        <CustomText variant='small' className='text-[#82A387]'>Login to your account</CustomText>
        <View className="w-full mt-8">
            <CustomTextInput placeholder='Full Name' iconName='user' value={fullName} onChangeText={setFullName}/>
            <CustomTextInput placeholder='••••••••' iconName='lock' isPassword={true} value={password} onChangeText={setPassword}/>
        </View>
        <View className="flex-row justify-between w-full mt-2">
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} className="flex-row items-center">
                <Feather name={rememberMe ? "check-circle" : "circle"} size={20} color="#82A387" />
                <CustomText variant='small' className='text-[#82A387] ml-2'>Remember Me</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={onForgotPress}>
                <CustomText variant='small' className='text-[#82A387]'>Forgot Password?</CustomText>
            </TouchableOpacity>
        </View>
        <CustomButton label='Login' onPress={onLoginPress}/>
        <View className="flex-row items-center mt-4">
            <CustomText variant='small' className="text-gray-500">Don't have account? </CustomText>
            <TouchableOpacity onPress={onSignUpPress}>
                <CustomText variant='small' className="text-[#355D49] font-bold">Sign up</CustomText>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginDetails