import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import type { TRouteProps } from "../Routes";


export const Detail = ()=>{
    const {params}  = useRoute <TRouteProps<'detail'>>();
    return(
        <Text>Essa e a pagina de Detall {params.rate}</Text>
    )
}