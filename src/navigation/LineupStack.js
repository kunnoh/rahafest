import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LineupDetail from "../app/screens/LineupDetail";
import LineupList from "../app/screens/LineupList";

const Stack = createNativeStackNavigator();

export default function LineupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LineupList" component={LineupList} />
      <Stack.Screen name="LineupDetail" component={LineupDetail} />
    </Stack.Navigator>
  );
}
