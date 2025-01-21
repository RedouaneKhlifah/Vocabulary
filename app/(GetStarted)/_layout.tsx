import React from "react";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="howDidYouHear" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="howOldAreYou" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="whichGenderAreYou" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="yourName" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="dailyReminders" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="vocabularyYour" options={{ headerShown: false ,tabBarStyle: { display: 'none' } }} />
    </Tabs>
  );
}

