import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../third-app/screens/Home";
import Details from "../third-app/screens/Details";
import Favorite from "../third-app/screens/Favorite";
import GradientHeader from "./screens/GradientHeader";
import CustomHeader from "./screens/CustomHeader";
import { FavoritesProvider } from "../third-app/screens/FavoriteContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <FavoritesProvider>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header: () => (
                <GradientHeader
                  title="Home"
                  navigation={navigation} 
                />
              ),
            })}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ navigation }) => ({
              header: () => (
                <CustomHeader
                  title="Details"
                  onHomePress={() => navigation.navigate("Home")}
                />
              ),
              headerStyle: {
                backgroundColor: "transparent",
              },
            })}
          />
          <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={({ navigation }) => ({
              header: () => (
                <CustomHeader
                  title="Favorites"
                  onHomePress={() => navigation.navigate("Home")}
                />
              ),
              headerStyle: {
                backgroundColor: "transparent",
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

export default App;
