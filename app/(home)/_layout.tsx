import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#8e8e8e',
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Biblioteca"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Feather name="music" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Reproduccion"
        options={{
          title: 'Reproducción',
          tabBarIcon: ({ color }) => <Feather name="play-circle" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
