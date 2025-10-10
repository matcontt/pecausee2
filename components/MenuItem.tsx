import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CustomText from './CustomText';
import React from 'react';

interface MenuItemProps {
    label: string;
    iconName: React.ComponentProps<typeof Feather>['name'];
    onPress: () => void;
}

const MenuItem = ({ label, iconName, onPress }: MenuItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Feather name={iconName} size={24} color="white" />
    <CustomText variant="small" className="text-white ml-4 text-lg">{label}</CustomText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
      padding: 16,
      marginBottom: 12,
    },
});

export default MenuItem;
