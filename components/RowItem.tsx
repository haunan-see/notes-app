import { View, Text, Image } from "react-native"
import React from "react"
import icons from "@/constants/icons"

const RowItem = ({ label, icon }: { label: string; icon?: string }) => {
  return (
    <View className="bg-fade rounded-2xl border border-transparent-100 shadow-2xl my-1">
      <View className="flex flex-row justify-between items-center gap-3.5 p-4">
        {icon && <Image source={icons.arrowRight} resizeMode="contain" />}
        <Text className="flex-1 font-pf text-sm text-white">{label}</Text>
        <Image
          source={icons.arrowRight}
          resizeMode="contain"
          width={14}
          height={8}
          className="px-4"
        />
      </View>
    </View>
  )
}

export default RowItem
