import { Image, ScrollView, Text, View } from "react-native"
import React from "react"
import Container from "@/components/Container"
import images from "@/constants/images"
import { getCategoryIcon } from "./home"
import Button from "@/components/Button"

const categories = [
  {
    title: "Work and study",
    count: 50,
  },
  {
    title: "Life",
    count: 12,
  },
  {
    title: "Health and wellness",
    count: 30,
  },
]

const Summary = () => {
  return (
    <Container>
      <View className="justify-between flex-row">
        <Text className="text-2xl font-pfbold text-white">Summary</Text>
        <Image source={images.robot} />
      </View>

      <ScrollView>
        {categories.map(({ title, count }) => (
          <View key={title} className="py-3">
            <View className="justify-between items-center flex-row my-3">
              <View className="flex-row gap-3">
                <Image
                  source={getCategoryIcon(title)}
                  resizeMode="contain"
                  width={50}
                  height={50}
                />
                <Text className="font-pf text-base text-white">{title}</Text>
              </View>
              <Button
                label="Detail"
                containerStyle="px-4 py-2"
                handleOnPress={() => console.log("Detail")}
              />
            </View>

            <View className="bg-fade rounded-2xl border border-transparent-100 shadow-2xl my-1 p-4">
              <Text className="font-pf text-base text-transparent-700">
                This topic has a total of {count} records.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  )
}

export default Summary
