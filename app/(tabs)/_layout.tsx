import { View, Text, Image, ImageSourcePropType } from "react-native"
import { Tabs, useSegments } from "expo-router"
import React from "react"
import icons from "@/constants/icons"
import { StatusBar } from "expo-status-bar"

type TabIconProps = {
  icon: ImageSourcePropType
  color: string
  label?: string
  focused: boolean
}

const TabIcon = ({ icon, color, label, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-1.5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-8 h-8"
      />
      <Text
        className={`${
          focused ? "font-pfbold" : "font-pflight"
        } font-pf text-xs`}
        style={{ color: color }}
      >
        {label}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#F94695",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            height: 120,
            paddingHorizontal: 20,
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                label="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.create}
                color={color}
                label="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="summary"
          options={{
            title: "Summary",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.summary}
                color={color}
                label="Summary"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  )
}

export default TabsLayout
