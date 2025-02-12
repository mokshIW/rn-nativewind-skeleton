import React from "react";
import { Image } from "react-native";
import { Tabs } from "expo-router";
import { House, Search, HardHat, UserRound } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00321C", // Active icon color
        tabBarInactiveTintColor: "#085D97", // Inactive icon color
        tabBarStyle: {
          backgroundColor: "#BDD5E7",
          paddingTop: 7,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
          tabBarLabel: "Explore",
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HardHat color={color} size={size} />
          ),
          tabBarLabel: "Services",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserRound color={color} size={size} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
