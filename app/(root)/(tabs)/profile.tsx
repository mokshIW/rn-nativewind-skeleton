import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DisplayText from "@/components/DisplayText";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <DisplayText text="Profile Screen" />
    </SafeAreaView>
  );
}
