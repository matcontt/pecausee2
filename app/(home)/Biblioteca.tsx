import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/CustomText';

const BibliotecaScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Playlists');

  const renderContent = () => {
    switch (activeTab) {
      case 'Playlists':
        return <CustomText variant="small" className="text-white">Aquí se mostrarán tus playlists.</CustomText>;
      case 'Artistas':
        return <CustomText variant="small" className="text-white">Aquí se mostrarán tus artistas seguidos.</CustomText>;
      case 'Álbumes':
        return <CustomText variant="small" className="text-white">Aquí se mostrarán tus álbumes guardados.</CustomText>;
      default:
        return null;
    }
  };

  const getTabClassName = (tabName: string) => {
    let className = 'text-white p-2';
    if (activeTab === tabName) {
      className += ' border-b-2 border-white';
    }
    return className;
  };

  return (
    <View className="flex-1 bg-black p-8 pt-16">
        <CustomText variant="large" className="text-white font-bold text-center mb-8">
          Mi Biblioteca
        </CustomText>
        
        <View className="flex-row justify-around mb-8 border-b-2 border-gray-500 pb-2">
          <TouchableOpacity onPress={() => setActiveTab('Playlists')}>
            <CustomText variant="medium" className={getTabClassName('Playlists')}>Playlists</CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Artistas')}>
            <CustomText variant="medium" className={getTabClassName('Artistas')}>Artistas</CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Álbumes')}>
            <CustomText variant="medium" className={getTabClassName('Álbumes')}>Álbumes</CustomText>
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center justify-center">
          {renderContent()}
        </View>
    </View>
  );
};

export default BibliotecaScreen;
