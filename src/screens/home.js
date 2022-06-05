import { View, SafeAreaView } from "react-native";
import React from "react";
import PlanetHeader from "../components/planet-header";
import GlobalStyles from "../theme/GlobalStyles";

export default function Home() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <PlanetHeader />
    </SafeAreaView>
  );
}
