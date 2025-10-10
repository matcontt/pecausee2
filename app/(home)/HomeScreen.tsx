import { View, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import React from 'react';
import CustomText from '../../components/CustomText';
import MenuItem from '../../components/MenuItem';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/FondoMusica.png")}
      className="flex-1 justify-center items-center"
    >
      <View className="p-8 w-full max-w-md">
        <CustomText variant="large" className="text-white font-bold text-center mb-12">
          Menú Principal
        </CustomText>
        
        <View>
          <MenuItem label="Reproducción" iconName="play-circle" onPress={() => console.log('Explorar pressed')} />
          <MenuItem label="Mis Playlists" iconName="music" onPress={() => console.log('Mis Playlists pressed')} />
          <MenuItem label="Buscar" iconName="search" onPress={() => console.log('Buscar pressed')} />
          <MenuItem label="Configuración" iconName="settings" onPress={() => router.push('/SettingsScreen')} />
        </View>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
