import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import React from "react"
import Container from "@/components/Container"
import icons from "@/constants/icons"
import { router } from "expo-router"
import RowItem from "@/components/RowItem"
import Footer from "@/components/Footer"
import Toast from "react-native-toast-message"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const settings = [
  "Online Customer",
  "User Agreement",
  "Privacy Policy",
  "About Us",
]

const getSettingsIcon = (title: string) => {
  switch (title) {
    case "Online Customer":
      return icons.customerService
    case "User Agreement":
      return icons.userAgreement
    case "Privacy Policy":
      return icons.privacyPolicy
    case "About Us":
      return icons.about
    default:
      return icons.about
  }
}

const Settings = () => {
  const insets = useSafeAreaInsets()
  const handleDeleteAllNotes = () => {
    // todo: add delete all notes logic
    Toast.show({
      type: "success",
      text1: "All notes have been cleared",
    })
  }

  return (
    <Container>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={icons.arrowRight}
            resizeMode="contain"
            width={14}
            height={8}
            className="px-4 transform rotate-180"
            tintColor="white"
          />
        </TouchableOpacity>
        <Text className="text-2xl font-pfbold text-white">Settings</Text>
      </View>

      <ScrollView className="py-6">
        {settings.map((item) => (
          <RowItem
            key={item}
            label={item}
            rowStyle="my-2"
            textStyle="text-base"
            icon={getSettingsIcon(item)}
          />
        ))}
      </ScrollView>
      <Footer buttonTitle="Delete All Notes" onPress={handleDeleteAllNotes} />
      <Toast topOffset={insets.top} />
    </Container>
  )
}

export default Settings
