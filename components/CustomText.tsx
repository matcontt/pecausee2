import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps {
    children: React.ReactNode;
    variant?: 'large' | 'medium' | 'small';
    className?: string;
    numberOfLines?: number; // Add numberOfLines prop
}

const CustomText = ({ children, variant, className, numberOfLines }: CustomTextProps) => {

    const getFontSize = () => {
        if (!variant) return '';
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
    <Text 
      className={`${getFontSize()} ${className || ''}`.trim()}
      numberOfLines={numberOfLines} // Pass numberOfLines to Text component
    >
      {children}
    </Text>
  )
}

export default CustomText
