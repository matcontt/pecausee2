import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import CustomText from '../components/CustomText';

const NotFound = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.replace('/(home)/HomeScreen'); // Vuelve a HomeScreen en el grupo (home)
  };

  return (
    <View className="flex-1 bg-black p-6 justify-center items-center">
      {/* Encabezado con back button */}
      <View className="flex-row items-center w-full mb-8">
        <TouchableOpacity onPress={() => router.back()} className="pr-4">
          <CustomText className="text-white text-2xl">←</CustomText>
        </TouchableOpacity>
        <CustomText variant="large" className="text-white font-bold">
          Página no encontrada
        </CustomText>
      </View>

      {/* Mensaje de error */}
      <View className="items-center">
        <CustomText variant="large" className="text-white mb-4 text-center">
          404 - Lo sentimos
        </CustomText>
        <CustomText variant="medium" className="text-gray-400 mb-8 text-center">
          Esta página no está disponible aún. ¡Vuelve pronto!
        </CustomText>

        {/* Botón para volver al home */}
        <TouchableOpacity 
          onPress={handleGoHome} 
          className="bg-[#b11f32] px-8 py-4 rounded-lg"
        >
          <CustomText variant="medium" className="text-white font-bold">
            Volver al inicio
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotFound;