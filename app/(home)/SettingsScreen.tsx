// /app/(home)/SettingsScreen.tsx
import { View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomText from '../../components/CustomText';

// Definimos la interfaz para las props del componente SettingsRow
interface SettingsRowProps {
  label: string;
  onPress?: () => void; // Opcional, solo para filas navegables
  children?: React.ReactNode; // Para Switch o texto no clicable
}

const SettingsScreen = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); // Limpia el token
      router.replace({ pathname: '/', params: { from: 'logout' } }); // Navega a login
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Funciones para navegación a rutas inexistentes (activará 404)
  const handleEditProfile = () => router.push('/(home)/edit-profile');
  const handleChangePassword = () => router.push('/(home)/change-password');
  const handleTerms = () => router.push('/(home)/terms');
  const handlePrivacy = () => router.push('/(home)/privacy');

  // Componente SettingsRow como TouchableOpacity completo
  const SettingsRow = ({ label, onPress, children }: SettingsRowProps) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row justify-between items-center py-4 border-b border-gray-800"
      activeOpacity={0.7} // Feedback visual al tocar
    >
      <CustomText variant="medium" className="text-white">{label}</CustomText>
      {children || <CustomText variant="medium" className="text-gray-400">›</CustomText>}
    </TouchableOpacity>
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
        <SettingsRow label="Editar Perfil" onPress={handleEditProfile} />
        <SettingsRow label="Cambiar Contraseña" onPress={handleChangePassword} />
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
      <View className="mb-8">
        <CustomText variant="small" className="text-gray-400 mb-2">ACERCA DE</CustomText>
        <SettingsRow label="Términos de Servicio" onPress={handleTerms} />
        <SettingsRow label="Política de Privacidad" onPress={handlePrivacy} />
        <SettingsRow label="Versión">
          <CustomText variant="medium" className="text-gray-400">1.0.0</CustomText>
        </SettingsRow>
      </View>

      {/* Sección para Cerrar Sesión */}
      <View>
        <CustomText variant="small" className="text-gray-400 mb-2">SESION</CustomText>
        <SettingsRow label="Cerrar Sesión" onPress={handleLogout}>
          <CustomText variant="medium" className="text-red-500">›</CustomText>
        </SettingsRow>
      </View>
    </View>
  );
};

export default SettingsScreen;