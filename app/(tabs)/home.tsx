import { Image, SectionList, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import images from "@/constants/images"
import { StatusBar } from "expo-status-bar"
import RowItem from "@/components/RowItem"
import icons from "@/constants/icons"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"

const DATA = [
  {
    title: "Work and study",
    data: [
      "Overview of basic computer networking knowledge",
      "How to calculate float multiplication and division in JavaScript?",
    ],
  },
  {
    title: "Life",
    data: ["Pan-fried chicken breast with vegetable salad"],
  },
  {
    title: "Health and wellness",
    data: ["Maintain sufficient daily water intake"],
  },
]

const getCategoryIcon = (title: string) => {
  switch (title) {
    case "Work and study":
      return icons.study
    case "Life":
      return icons.life
    case "Health and wellness":
      return icons.health
    default:
      return icons.study
  }
}

const Home = () => {
  return (
    <LinearGradient
      colors={["#2a0845", "#2a084f", "#680206"]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <SafeAreaView className="h-full">
        <View className="px-5">
          <View className="justify-between items-start flex-row mb-6">
            <View>
              <Text className="text-2xl font-pfbold text-white">Home</Text>
            </View>

            <View className="mt-1.5">
              <TouchableOpacity onPress={() => router.push("/settings")}>
                <Image
                  source={images.settings}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row gap-3 items-center">
            <Image source={icons.clock} width={40} height={40} />
            <Text className="font-pf text-base text-white">
              Recently created notes
            </Text>
          </View>
          <SectionList
            className="h-full"
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <RowItem label={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <View className="flex-row gap-3 items-center pb-3 pt-7">
                <Image source={getCategoryIcon(title)} />
                <Text className="font-pf text-base text-white">{title}</Text>
              </View>
            )}
            stickyHeaderHiddenOnScroll
          />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Home
