import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function headerBackground({ color1, color2 }: any) {
  return (
    <LinearGradient
      colors={[color1, color2]}
      style={{ width: "100%", height: "100%" }}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    />
  );
}
