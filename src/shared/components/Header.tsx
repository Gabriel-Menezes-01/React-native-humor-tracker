import { StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";


interface IHeaderProps{
    name?: string;
}

export const Header = ({name}: IHeaderProps) => {
    return (
        <>
            <View style={styles.headerConteinerF} >
                <Text style={styles.headerText}>
                    Olá,
                </Text>
                <Text style={styles.headerBoldText}>
                {!name ? 'Seu Nome é':`${name}`}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerConteinerF: {
        padding: 16,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",



    },
    headerText: {
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.regular,
    },
    headerBoldText: {
        color:theme.colors.primary,
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.bold,
    }
})