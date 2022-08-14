import "react-native-gesture-handler";

import { KeyboardAvoidingView, Platform } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./store";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
