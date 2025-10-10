import { View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';

// Datos de ejemplo para las categorías
const categories = [
  { id: '1', title: 'Música', color: 'bg-red-500' },
  { id: '2', title: 'Podcasts', color: 'bg-green-500' },
  { id: '3', title: 'Eventos en vivo', color: 'bg-purple-500' },
  { id: '4', title: 'Hecho para ti', color: 'bg-blue-500' },
  { id: '5', title: 'Novedades', color: 'bg-orange-500' },
  { id: '6', title: 'Verano', color: 'bg-yellow-500' },
  { id: '7', title: 'Pop', color: 'bg-pink-500' },
  { id: '8', title: 'Rock', color: 'bg-indigo-500' },
  { id: '9', title: 'Hip-Hop', color: 'bg-teal-500' },
  { id: '10', title: 'Relax', color: 'bg-cyan-500' },
];

// Definimos la interfaz para las props del componente CategoryCard
interface CategoryCardProps {
  title: string;
  color: string;
}

const SearchScreen = () => {
  // Aplicamos la interfaz de props al componente
  const CategoryCard = ({ title, color }: CategoryCardProps) => (
    <TouchableOpacity className={`h-24 rounded-lg p-2 m-1 flex-1 justify-end ${color}`}>
      <CustomText variant="medium" className="text-white font-bold">{title}</CustomText>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-black p-4">
      {/* Encabezado */}
      <CustomText variant="large" className="text-white font-bold mt-12 mb-4">Buscar</CustomText>
      
      {/* Barra de Búsqueda */}
      <View className="bg-gray-800 rounded-lg flex-row items-center p-2 mb-4">
        <CustomText className="text-white mx-2 text-xl">🔍</CustomText>
        <TextInput
          placeholder="¿Qué te apetece escuchar?"
          placeholderTextColor="#9CA3AF"
          className="text-white flex-1"
        />
      </View>

      {/* Título de la sección */}
      <CustomText variant="medium" className="text-white font-bold mb-2">Explorar todo</CustomText>

      {/* Cuadrícula de Categorías */}
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard title={item.title} color={item.color} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;
