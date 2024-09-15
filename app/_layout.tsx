import React, { useEffect } from "react"
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "PingFang-Regular": require("../assets/fonts/PingFang-Regular.ttf"),
    "PingFang-Bold": require("../assets/fonts/PingFang-Bold.ttf"),
    "PingFang-Light": require("../assets/fonts/PingFang-Light.ttf"),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default RootLayout
