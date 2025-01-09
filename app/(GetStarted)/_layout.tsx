import React from "react";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="howDidYouHear" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="howOldAreYou" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
    </Tabs>
  );
}

