import React, { ReactNode } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <LinearGradient
      colors={["#2a0845", "#2a084f", "#680206"]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <SafeAreaView className="h-full px-5 pt-3">{children}</SafeAreaView>
    </LinearGradient>
  )
}

export default Container
