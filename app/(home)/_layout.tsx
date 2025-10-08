import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="HomeScreen" options={{
            title:"Home"
        }}/>
        <Stack.Screen name="SettingsScreen"options={{
            title:"Configuraciones"
        }}/>
    </Stack>
  )
}

export default HomeLayout