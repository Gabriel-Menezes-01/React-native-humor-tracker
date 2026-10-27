import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import type { TnaviagtionScreenProps } from "../Routes";
import { Header } from "../shared/components/Header";


export const Home = () => {
    const navigation = useNavigation<TnaviagtionScreenProps>();

    return (
        <>
            <Header
            name="Gabriel"
            />

            <Text style={{fontFamily:'extraBold' }}>Essa e a pagina de Home</Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("detail", { rate: 3 })}
            />
            <Button
                title="Go to set user Name"
                onPress={() => navigation.navigate("usename")}
            />
        </>
    )
}