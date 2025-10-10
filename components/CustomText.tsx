import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps {
    children: React.ReactNode;
    variant?: 'large' | 'medium' | 'small';
    className?: string;
}

const CustomText = ({ children, variant, className }: CustomTextProps) => {

    const getFontSize = () => {
        if (!variant) return ''; // Si no hay variante, no se aplica un tamaño de fuente base
        switch (variant) {
            case 'large':
                return 'text-4xl';
            case 'medium':
                return 'text-lg';
            case 'small':
                return 'text-base';
            default:
                return 'text-base';
        }
    }

  return (
    <Text className={`${getFontSize()} ${className || ''}`.trim()}>
      {children}
    </Text>
  )
}

export default CustomText
