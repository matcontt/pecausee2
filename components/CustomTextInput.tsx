import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

interface CustomTextInputProps {
  placeholder: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  isPassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput = ({ placeholder, iconName, isPassword = false, value, onChangeText }: CustomTextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-row items-center bg-[#F0F4F3] rounded-xl p-4 my-3 w-full">
      <Feather name={iconName} size={20} color="#b11f32" />
      <TextInput
        placeholder={placeholder}
        className="ml-3 flex-1 text-[#000000]"
        secureTextEntry={isPassword && !showPassword}
        placeholderTextColor="#000000"
        value={value}
        onChangeText={onChangeText}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? "eye-off" : "eye"} size={20} color="#b11f32" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default CustomTextInput
