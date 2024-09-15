import { Image, SectionList, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import images from "@/constants/images"
import RowItem from "@/components/RowItem"
import icons from "@/constants/icons"
import { router } from "expo-router"
import Container from "@/components/Container"
import { useNotes } from "@/hooks/useNotes"

export const getCategoryIcon = (title: string) => {
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
  const { notes, loading, refetch } = useNotes()

  return (
    <Container>
      <View className="justify-between items-start flex-row mb-6">
        <Text className="text-2xl font-pfbold text-white">Home</Text>
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
        <Image
          source={icons.clock}
          resizeMode="contain"
          width={20}
          height={20}
        />
        <Text className="font-pf text-base text-transparent-700">
          Recently created notes
        </Text>
      </View>

      <SectionList
        className="h-full"
        sections={notes}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <RowItem label={item} rowStyle="my-1" />}
        renderSectionHeader={({ section: { title } }) => (
          <View className="flex-row gap-3 items-center pb-2 pt-7">
            <Image
              source={getCategoryIcon(title)}
              resizeMode="contain"
              width={20}
              height={20}
            />
            <Text className="font-pf text-base text-white">{title}</Text>
          </View>
        )}
        stickyHeaderHiddenOnScroll
        showsVerticalScrollIndicator={false}
        onRefresh={() => refetch()}
        refreshing={loading}
      />
    </Container>
  )
}

export default Home
