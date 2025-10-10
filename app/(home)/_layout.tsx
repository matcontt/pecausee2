import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="HomeScreen" options={{
            title:"Menú Principal"
        }}/>
        <Stack.Screen name="SettingsScreen"options={{
            title:"Configuraciones"
        }}/>
        <Stack.Screen name="Reproduccion" options={{
            title:"Reproducción"
        }}/>
    </Stack>
  )
}

export default HomeLayout