import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps {
    children: React.ReactNode;
    variant: 'large' | 'small';
    dark: boolean;
    color?: string;
}

const CustomText = ({ children, variant, dark, color }: CustomTextProps) => {

    const getFontSize = () => {
        switch (variant) {
            case 'large':
                return 'text-4xl';
            case 'small':
                return 'text-base';
            default:
                return 'text-base';
        }
    }

    const getTextColor = () => {
        if (color) return color;
        return dark ? 'text-black' : 'text-white';
    }

  return (
    <Text className={`${getFontSize()} ${getTextColor()}`}>
      {children}
    </Text>
  )
}

export default CustomText
