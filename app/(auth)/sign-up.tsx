import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SignUpScreen() {
  return (
    <SafeAreaView className="flex h-full items-center justify-center">
      <View className="flex items-center justify-center gap-y-4">
        <Text className="text-5xl font-bold">Sign Up Screen</Text>
        <Pressable
          onPress={() => router.push("/welcome")}
          className="px-6 py-4 my-4 bg-yellow-500 rounded-3xl"
        >
          <Text className="text-xl font-semibold text-center text-black">
            Go Back to Home!
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
