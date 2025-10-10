import { View, Text, TouchableOpacity} from 'react-native'
import { Link, useNavigation, router } from 'expo-router';
import React from 'react'

const indexHome = () => {
  return (
     <View className="absolute bottom-12 right-6">
              <TouchableOpacity 
                onPress={() => { 
                  router.push("/SettingsScreen")
                }}
                className="bg-[#b11f32] rounded-full p-4 w-full items-center mt-8"
              ><Text className="text-white text-lg">Enviar</Text></TouchableOpacity>
        </View>

  )
}

export default indexHome