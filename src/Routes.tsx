import { createNativeStackNavigator, type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { Home } from "./screens/Home";
import { Detail } from "./screens/Detail";
import { SetUseName } from "./screens/SetUseName";
import { NavigationContainer, type RouteProp } from "@react-navigation/native";
import { HeaderShownContext } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "./shared/themes/Theme";

type TScreenDefinitions = {
    home: undefined;
    usename: undefined;
    detail: { rate: number };
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{ 
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: theme.colors.background,
                    }
                }}
                screenLayout={({ children }) => (
                    <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
                )}
            >
                <Stack.Group
                    screenOptions={{ 
                        sheetCornerRadius: 24,
                        presentation: "formSheet",
                    }}
                    >
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen 
                    name="detail" 
                    component={Detail}
                    options={{sheetAllowedDetents:[0.8, 0.95]}} 
                    />

                    <Stack.Screen 
                    name="usename" 
                    component={SetUseName} 
                    options={{sheetAllowedDetents:[0.4, 0.6]}}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export type TnaviagtionScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;