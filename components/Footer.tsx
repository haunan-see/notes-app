import React from "react"
import { Dimensions, View } from "react-native"
import Button from "./Button"

const Footer = ({
  onPress,
  buttonTitle,
}: {
  onPress: () => void
  buttonTitle: string
}) => {
  const deviceWidth = Dimensions.get("window").width + 1

  return (
    <View
      className={`absolute bottom-0 w-[${deviceWidth}px] h-[120px] items-center justify-center bg-secondary`}
    >
      <Button
        label={buttonTitle}
        handleOnPress={onPress}
        containerStyle="px-10"
      />
    </View>
  )
}

export default Footer
