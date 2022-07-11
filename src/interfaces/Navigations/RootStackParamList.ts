import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Main: undefined
    Register: undefined
    Login: undefined
}

export type INavigationProp = NativeStackScreenProps<RootStackParamList>