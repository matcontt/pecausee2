import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    label: string;
}

const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <TouchableOpacity className="bg-[#355D49] rounded-full p-4 w-full items-center mt-8">
      <Text className="text-white text-lg">{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton