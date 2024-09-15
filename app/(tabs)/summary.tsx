import React from "react"
import { Image, RefreshControl, ScrollView, Text, View } from "react-native"
import Button from "@/components/Button"
import Container from "@/components/Container"
import { useNotes } from "@/hooks/useNotes"
import images from "@/constants/images"
import { getCategoryIcon } from "./home"

const Summary = () => {
  const { categories, getNoteCategoryCount, refetch, loading } = useNotes()

  return (
    <Container>
      <View className="justify-between flex-row">
        <Text className="text-2xl font-pfbold text-white">Summary</Text>
        <Image source={images.robot} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      >
        {categories.map(({ value }) => (
          <View key={value} className="py-3">
            <View className="justify-between items-center flex-row my-3">
              <View className="flex-row gap-3">
                <Image
                  source={getCategoryIcon(value)}
                  resizeMode="contain"
                  width={50}
                  height={50}
                />
                <Text className="font-pf text-base text-white">{value}</Text>
              </View>
              <Button
                label="Detail"
                containerStyle="px-4 py-2"
                handleOnPress={() => console.log("Detail")}
              />
            </View>

            <View className="bg-fade rounded-2xl border border-transparent-100 shadow-2xl my-1 p-4">
              <Text className="font-pf text-base text-transparent-700">
                This topic has a total of {getNoteCategoryCount(value)} records.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  )
}

export default Summary
