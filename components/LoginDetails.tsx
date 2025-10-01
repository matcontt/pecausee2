import { View, Text, TouchableOpacity } from 'react-native'
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
}

const LoginDetails = ({ fullName, setFullName, password, setPassword, rememberMe, setRememberMe }: LoginDetailsProps) => {
  return (
    <View className="bg-white absolute bottom-0 h-[75%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' dark={false}>Welcom Back</CustomText>
        <CustomText variant='small' dark={false}>Login to your account</CustomText>
        <View className="w-full mt-8">
            <CustomTextInput placeholder='Full Name' iconName='user' value={fullName} onChangeText={setFullName}/>
            <CustomTextInput placeholder='••••••••' iconName='lock' isPassword={true} value={password} onChangeText={setPassword}/>
        </View>
        <View className="flex-row justify-between w-full mt-2">
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} className="flex-row items-center">
                <Feather name={rememberMe ? "check-circle" : "circle"} size={20} color="#82A387" />
                <CustomText variant='small' dark={false}>Remember Me</CustomText>
            </TouchableOpacity>
            <CustomText variant='small' dark={false}>Forgot Password?</CustomText>
        </View>
        <CustomButton label='Login' />
        <View className="flex-row items-center mt-4">
            <Text className="text-gray-500">Don't have account? </Text>
            <Text className="text-[#355D49] font-bold">Sign up</Text>
        </View>
    </View>
  )
}

export default LoginDetails