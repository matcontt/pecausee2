import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';

// Placeholder data
const recentlyPlayed = [
  { id: '1', title: 'Album 1', artist: 'Artist 1' },
  { id: '2', title: 'Album 2', artist: 'Artist 2' },
  { id: '3', title: 'Album 3', artist: 'Artist 3' },
  { id: '4', title: 'Album 4', artist: 'Artist 4' },
  { id: '5', title: 'Album 5', artist: 'Artist 5' },
];

const playlists = [
    { id: '1', title: 'Liked Songs' },
    { id: '2', title: 'My Playlist #1' },
    { id: '3', title: 'Rock Classics' },
    { id: '4', title: 'Chill Mix' },
    { id: '5', title: 'Indie Hits' },
    { id: '6', title: 'Discover Weekly' },
];


const HomeScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-black">
      <ScrollView style={{paddingTop: 50}} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="p-4">
          <CustomText variant="large" className="text-white font-bold mb-6">Good Morning</CustomText>
          
          {/* Recently Played */}
          <View className="mb-8">
            <CustomText variant="medium" className="text-white font-bold mb-4">Recently Played</CustomText>
            <FlatList
              data={recentlyPlayed}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              renderItem={({ item }) => (
                <TouchableOpacity className="w-32">
                  <View className="w-32 h-32 bg-gray-500 rounded-md mb-2"></View>
                  <CustomText className="text-white font-bold" numberOfLines={1}>{item.title}</CustomText>
                  <CustomText className="text-gray-400" numberOfLines={1}>{item.artist}</CustomText>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>

          {/* Your Playlists */}
          <View>
            <CustomText variant="medium" className="text-white font-bold mb-4">Your Playlists</CustomText>
            <View style={{ gap: 12 }}>
                {playlists.map(playlist => (
                    <TouchableOpacity key={playlist.id} className="flex-row items-center bg-gray-800/50 p-2 rounded-md">
                        <View className="w-16 h-16 bg-gray-700 rounded-md mr-4"></View>
                        <CustomText className="text-white font-bold">{playlist.title}</CustomText>
                    </TouchableOpacity>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
