import { View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

interface CustomTextInputProps {
  placeholder: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  isPassword?: boolean;
}

const CustomTextInput = ({ placeholder, iconName, isPassword = false }: CustomTextInputProps) => {
  return (
    <View className="flex-row items-center bg-[#F0F4F3] rounded-xl p-4 my-3 w-full">
      <Feather name={iconName} size={20} color="#82A387" />
      <TextInput
        placeholder={placeholder}
        className="ml-3 flex-1 text-[#82A387]"
        secureTextEntry={isPassword}
        placeholderTextColor="#82A387"
      />
      {isPassword && (
        <Feather name="eye" size={20} color="#82A387" />
      )}
    </View>
  )
}

export default CustomTextInput
