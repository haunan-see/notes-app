import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Toast from "react-native-toast-message"
import { Dropdown } from "react-native-element-dropdown"
import { router } from "expo-router"
import Container from "@/components/Container"
import Button from "@/components/Button"
import icons from "@/constants/icons"
import { createNote } from "../../lib/appwrite"
import { useNotes } from "@/hooks/useNotes"

const Create = () => {
  const insets = useSafeAreaInsets()
  const { categories } = useNotes()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = async () => {
    try {
      const newNote = await createNote({
        category: selectedCategory,
        content: note,
      })

      if (newNote) {
        Toast.show({
          type: "success",
          text1: "Note created successfully!",
        })

        setSelectedCategory("")
        setNote("")
      }
    } catch (error) {
      console.log("error", error)
    }
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
        <Text className="text-2xl font-pfbold text-white">New Note</Text>
      </View>

      <Dropdown
        data={categories}
        value={selectedCategory}
        onChange={(item) => setSelectedCategory(item.value)}
        labelField="value"
        valueField="value"
        placeholder="Choose a category"
        style={styles.container}
        containerStyle={styles.itemContainer}
        placeholderStyle={styles.text}
        selectedTextStyle={styles.text}
        itemTextStyle={styles.text}
        activeColor="rgba(255, 255, 255, 0.1)"
        renderRightIcon={() => (
          <Image
            source={icons.arrowRight}
            tintColor="white"
            className="transform rotate-90"
          />
        )}
      />

      <TextInput
        className="bg-fade rounded-2xl border border-transparent-100 shadow-2xl p-4 font-pf text-sm text-white h-[40%]"
        placeholder="Please input note content"
        placeholderTextColor="white"
        value={note}
        onChangeText={(e) => setNote(e)}
        maxLength={200}
        multiline
        blurOnSubmit
        returnKeyType="done"
      />

      <Button
        containerStyle="items-center my-4"
        label="Submit"
        handleOnPress={handleSubmit}
        disabled={!selectedCategory || !note}
      />
      <Toast topOffset={insets.top} />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 16,
  },
  itemContainer: {
    marginVertical: 16,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 16,
  },
  text: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 14,
  },
})

export default Create
