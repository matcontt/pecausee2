import { View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import CustomText from '../../components/CustomText';

// Definimos la interfaz para las props del componente SettingsRow
interface SettingsRowProps {
  label: string;
  children: React.ReactNode;
}

const SettingsScreen = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);

  // Aplicamos la interfaz de props al componente
  const SettingsRow = ({ label, children }: SettingsRowProps) => (
    <View className="flex-row justify-between items-center py-4 border-b border-gray-800">
      <CustomText variant="medium" className="text-white">{label}</CustomText>
      {children}
    </View>
  );

  return (
    <View className="flex-1 bg-black p-6">
      {/* Encabezado */}
      <View className="flex-row items-center mt-8 mb-8">
        <TouchableOpacity onPress={() => router.back()} className="pr-4">
          <CustomText className="text-white text-2xl">←</CustomText>
        </TouchableOpacity>
        <CustomText variant="large" className="text-white font-bold">
          Ajustes
        </CustomText>
      </View>

      {/* Sección de Cuenta */}
      <View className="mb-8">
        <CustomText variant="small" className="text-gray-400 mb-2">CUENTA</CustomText>
        <SettingsRow label="Editar Perfil">
          <CustomText variant="medium" className="text-gray-400">›</CustomText>
        </SettingsRow>
        <SettingsRow label="Cambiar Contraseña">
          <CustomText variant="medium" className="text-gray-400">›</CustomText>
        </SettingsRow>
      </View>

      {/* Sección de Notificaciones */}
      <View className="mb-8">
        <CustomText variant="small" className="text-gray-400 mb-2">NOTIFICACIONES</CustomText>
        <SettingsRow label="Nuevos Lanzamientos">
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#767577", true: "#b11f32" }}
            thumbColor={notifications ? "#ffffff" : "#f4f3f4"}
          />
        </SettingsRow>
      </View>
      
      {/* Sección de Acerca de */}
      <View>
        <CustomText variant="small" className="text-gray-400 mb-2">ACERCA DE</CustomText>
        <SettingsRow label="Términos de Servicio">
          <CustomText variant="medium" className="text-gray-400">›</CustomText>
        </SettingsRow>
        <SettingsRow label="Política de Privacidad">
          <CustomText variant="medium" className="text-gray-400">›</CustomText>
        </SettingsRow>
         <SettingsRow label="Versión">
          <CustomText variant="medium" className="text-gray-400">1.0.0</CustomText>
        </SettingsRow>
      </View>

    </View>
  );
};

export default SettingsScreen;