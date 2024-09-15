import { Text, TouchableOpacity } from "react-native"
import React from "react"

const Button = ({
  label,
  containerStyle,
  handleOnPress,
  disabled,
}: {
  label: string
  containerStyle?: string
  handleOnPress: () => void
  disabled?: boolean
}) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.7}
      className={`${
        disabled ? "bg-gray-400" : "bg-primary"
      } p-2 rounded-3xl ${containerStyle}`}
      disabled={disabled}
    >
      <Text className="font-pf text-white text-sm">{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
