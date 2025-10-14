
import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomTextInput from './CustomTextInput'
import CustomButton from './CustomButton';

interface RegisterFormProps {
    fullName: string;
    setFullName: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    confirmPassword: string;
    setConfirmPassword: (text: string) => void;
    onRegisterPress: () => void;
    onBackToLoginPress: () => void;
}

const RegisterForm = ({
    fullName,
    setFullName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onRegisterPress,
    onBackToLoginPress
}: RegisterFormProps) => {
  return (
    <View className="bg-[#b8b3b3] absolute bottom-0 h-[70%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' className='text-black font-bold'>Create Account</CustomText>
        <CustomText variant='small' className='text-[#666666]'>Start your journey with us</CustomText>
        <View className="w-full mt-6">
            <CustomTextInput placeholder='Full Name' iconName='user' value={fullName} onChangeText={setFullName}/>
            <CustomTextInput placeholder='••••••••' iconName='lock' isPassword={true} value={password} onChangeText={setPassword}/>
            <CustomTextInput placeholder='Confirm Password' iconName='lock' isPassword={true} value={confirmPassword} onChangeText={setConfirmPassword}/>
        </View>
        <CustomButton label='Register' onPress={onRegisterPress}/>
        <View className="flex-row items-center mt-4">
            <CustomText variant='small' className="text-[#666666]">Already have an account? </CustomText>
            <TouchableOpacity onPress={onBackToLoginPress}>
                <CustomText variant='small' className="text-[#b11f32] font-bold">Log in</CustomText>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default RegisterForm
