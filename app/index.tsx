import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { router } from "expo-router"

const App = () => {
  return (
    <View className="mt-10">
      <Text className="text-3xl">App</Text>
      <TouchableOpacity
        className="bg-black"
        onPress={() => router.push("/home")}
      >
        <Text className="text-white">Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
