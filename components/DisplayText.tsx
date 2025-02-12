import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function DisplayText({ text }: { text: string }) {
  return (
    <View className="h-full flex items-center justify-center gap-y-4">
      <Text className="text-4xl font-medium">{text}</Text>

      <Pressable
        onPress={() => router.push("/welcome")}
        className="px-6 py-4 my-4 bg-cyan-700 rounded-3xl"
      >
        <Text className="text-xl font-semibold text-center text-white">
          Welcome Screen
        </Text>
      </Pressable>
    </View>
  );
}
