import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    label: string;
    onPress: () => void;
}

const CustomButton = ({ label, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="bg-[#b11f32] rounded-full p-4 w-full items-center mt-8">
      <Text className="text-white text-lg">{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton