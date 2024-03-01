/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import App from "./App";
import Home from "./src/screens/Home";
import Info from "./src/screens/Info";
import LineupDetail from "./src/screens/LineupDetail";
import LineupList from "./src/screens/LineupList";
import Map from "./src/screens/Map";
import Menu from "./src/screens/Menu";
import Schedule from "./src/screens/Schedule";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Mock your navigation components
jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe("App", () => {
  test("renders without crashing", () => {
    render(
      <NavigationContainer>
        <App />
      </NavigationContainer>,
    );
  });

  test("navigates to Home screen", () => {
    const { getByText } = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>,
    );
    const homeTab = getByText("Home");
    fireEvent.press(homeTab);
    expect(getByText("Welcome to the Home screen")).toBeTruthy();
  });
});
