import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "../theme/spacing";

export default function PlanetHeader() {
  return (
    <View>
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
  },
});
