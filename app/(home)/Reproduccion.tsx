import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import CustomText from '../../components/CustomText';
// Importa tus íconos aquí. Usaremos textos como placeholders por ahora.

const ReproduccionScreen = () => {
  const router = useRouter();

  // Datos de ejemplo
  const song = {
    title: 'Nombre de la Canción',
    artist: 'Nombre del Artista',
    albumArt: 'https://i.discogs.com/SZyIDleYyPH7Na6IfV7uOMMILUCFZACR2M5G8g5HM4o/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDU5/NDAtMTQ2NTE4ODc5/OS05MDYzLmpwZWc.jpeg', // URL de imagen de ejemplo
  };

  return (
    <View className="flex-1 bg-black p-6 justify-between">
      {/* Encabezado */}
      <View className="flex-row justify-between items-center mt-8">
        <TouchableOpacity onPress={() => router.back()}>
          <CustomText className="text-white">↓</CustomText> 
        </TouchableOpacity>
        <CustomText variant="medium" className="text-white font-bold text-center flex-1">REPRODUCIENDO</CustomText>
        <View style={{ width: 20 }} />
      </View>

      {/* Carátula del Álbum */}
      <View className="items-center my-8">
        <Image source={{ uri: song.albumArt }} className="w-80 h-80 rounded-lg" />
      </View>

 {/* Información de la canción */}
 <View className="items-center mb-4">
        <CustomText variant="large" className="text-white font-bold">{song.title}</CustomText>
        <CustomText variant="medium" className="text-gray-400">{song.artist}</CustomText>
      </View>

      {/* Barra de Progreso (Placeholder) */}
      <View className="h-2 bg-gray-700 rounded-full w-full mb-4">
        <View className="h-2 bg-white rounded-full w-1/2"></View>
      </View>

      {/* Controles de Reproducción */}
      <View className="flex-row justify-around items-center mb-8">
        <TouchableOpacity>
          <CustomText className="text-white text-3xl">↺</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText className="text-white text-4xl">«</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-full w-20 h-20 items-center justify-center">
          <CustomText className="text-black text-5xl">▶</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText className="text-white text-4xl">»</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText className="text-white text-3xl">⇄</CustomText> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReproduccionScreen;