import { createStackNavigator } from "@react-navigation/stack";

import Home from "./../screens/Home";
import Search from "../screens/Search";
import GamesCategory from "./../screens/GamesCategory";
import GamesDetails from "./../screens/GamesDetails";
import Favorites from "../screens/Favorites";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GamesCategory"
        component={GamesCategory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GamesDetails"
        component={GamesDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
