import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native"
import React from "react"
import icons from "@/constants/icons"

type RowItemProps = {
  label: string
  icon?: ImageSourcePropType
  rowStyle?: string
  textStyle?: string
}

const RowItem = ({ label, icon, rowStyle, textStyle }: RowItemProps) => {
  return (
    <TouchableOpacity
      className={`bg-fade rounded-2xl border border-transparent-100 shadow-2xl ${rowStyle}`}
      activeOpacity={0.7}
    >
      <View className="flex flex-row justify-between items-center gap-3.5 p-4">
        {icon && <Image source={icon} resizeMode="contain" />}
        <Text className={`flex-1 font-pf text-transparent-900 ${textStyle}`}>
          {label}
        </Text>
        <Image
          source={icons.arrowRight}
          resizeMode="contain"
          width={14}
          height={8}
          className="px-4"
        />
      </View>
    </TouchableOpacity>
  )
}

export default RowItem
