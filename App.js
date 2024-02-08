import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Schedule from './src/screens/Schedule';
import Info from './src/screens/Info';
import LineupList from './LineupList';
import LineupDetail from './LineupDetail';
import Menu from './src/screens/Menu';
import Map from './src/screens/Map';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const LineupStack = () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="LineupList" component={LineupList} />
        <Stack.Screen name="LineupDetail" component={LineupDetail} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          tabBarStyle: { borderTopWidth: 0},
          tabBarShowLabel: false,
        }
      }>
      
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon : ({size, focused }) => focused ? <Entypo name="home" size={size} color='#bc4a0d'/> : <Entypo name="home" size={size} color='black'/>,
          tabBarLabelStyle: {color: 'black'},
        }} />

        <Tab.Screen name="Lineup" component={LineupStack} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <FontAwesome5 name="compact-disc" size={size} color='#bc4a0d' /> : <FontAwesome5 name="compact-disc" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }} />

        <Tab.Screen name="Schedule" component={Schedule} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <MaterialCommunityIcons name="calendar-clock" size={size} color='#bc4a0d' /> : <MaterialCommunityIcons name="calendar-clock" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/>

        <Tab.Screen name="Info" component={Info} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <Ionicons name="information-circle" size={size} color='#bc4a0d' /> : <Ionicons name="information-circle" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/>

        <Tab.Screen name="Menu" component={Menu} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <MaterialCommunityIcons name="food-fork-drink" size={size} color='#bc4a0d' /> : <MaterialCommunityIcons name="food-fork-drink" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/>

        <Tab.Screen name="Map" component = { Map } options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <MaterialCommunityIcons name="google-maps" size={size} color='#bc4a0d' /> : <MaterialCommunityIcons name="google-maps" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
};