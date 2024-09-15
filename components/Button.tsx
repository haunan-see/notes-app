import { Text, TouchableOpacity } from "react-native"
import React from "react"

const Button = ({
  label,
  containerStyle,
  handleOnPress,
}: {
  label: string
  containerStyle?: string
  handleOnPress: () => void
}) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.7}
      className={`bg-primary p-2 rounded-3xl ${containerStyle}`}
    >
      <Text className={`font-pf text-white text-sm`}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
