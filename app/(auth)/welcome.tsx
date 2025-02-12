import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <View className="flex items-center justify-center gap-y-4">
        <Text className="text-5xl font-bold">Hello World!</Text>
        <Text className="text-2xl font-semibold text-center leading-10">
          This is React Native with Nativewind Skeleton Project!
        </Text>

        {/* Explore Skeleton */}
        <Pressable
          onPress={() => router.push("/(root)/(tabs)/home")}
          className="px-6 py-4 my-4 bg-blue-600 rounded-3xl"
        >
          <Text className="text-xl font-semibold text-center text-white">
            Explore Skeleton
          </Text>
        </Pressable>

        {/* Sign Up & Sign In Screen Quick Buttons */}
        <View className="flex flex-row items-center justify-center gap-x-4">
          <Pressable
            onPress={() => router.push("/sign-up")}
            className="px-8 py-4 my-3 bg-orange-600 rounded-3xl"
          >
            <Text className="text-xl font-semibold text-center text-white">
              Sign Up
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/sign-in")}
            className="px-8 py-4 my-4 bg-cyan-600 rounded-3xl"
          >
            <Text className="text-xl font-semibold text-center text-white">
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
