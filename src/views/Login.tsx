import IconsLoginRegister from "@components/Register/IconsLoginRegister";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native";
import { Input, Button } from "native-base";
import InputRegister from "@components/Register/InputRegister";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  INavigationProp,
  RootStackParamList,
} from "interfaces/Navigations/RootStackParamList";

const styles = StyleSheet.create({
  content: {
    padding: 30,
  },
  textIcons: {
    marginBottom: 20,
    color: "#90919f",
  },
  buttonsContainer: {
    marginTop: "15%",
  },
  inputContainer: {
    marginTop: "10%",
  },
  passwordRecoveryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  registerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  baseText: {
    fontWeight: "500",
    fontSize: 25,
    maxWidth: 270,
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10%",
  },
  childText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 5
  },
});

interface IForm {
  email: string;
  password: string;
}

const Login: React.FC<INavigationProp> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any): void => {
    console.log("data", console.log("data", data));
  };

  return (
    <View style={styles.content}>
      <View style={styles.textContainer}>
        <View style={{ maxWidth: 200 }}>
          <Text style={styles.baseText}>¡Hola de nuevo!</Text>
          <Text style={styles.childText}>
            ¡Bienvenido te hemos estado esperando!
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Text style={styles.textIcons}>
          Inicia sesión con una de las siguientes opciones.
        </Text>
        <IconsLoginRegister />
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // <TextInput
              //   // style={styles.input}
              //   onBlur={onBlur}
              //   onChangeText={onChange}
              //   value={value}
              //   placeholder="ingrese email"
              // />
              <InputRegister
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Ingrese correo"
                title="Correo"
              />
            )}
            name="email"
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // <TextInput
              //   // style={styles.input}
              //   onBlur={onBlur}
              //   onChangeText={onChange}
              //   value={value}
              // />
              <InputRegister
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Ingrese contraseña"
                title="Contraseña"
              />
            )}
            name="password"
          />
        </View>
      </View>

      <View style={styles.passwordRecoveryContainer}>
        <Text style={{ color: "#90919f", fontWeight: "500" }}>
          Recuperar contraseña
        </Text>
      </View>

      <Button
        _text={{ fontWeight: 500 }}
        backgroundColor="#fc6a68"
        borderRadius="2xl"
        style={{ height: 50, marginTop: "10%" }}
      >
        Iniciar
      </Button>

      <View style={styles.registerContainer}>
        <Text>¿No tienes cuenta?</Text>
        <Text
          style={{ marginLeft: 5, color: "#599df1", fontWeight: "600" }}
          onPress={() => navigation.navigate("Register")}
        >
          Registrate ahora
        </Text>
      </View>
    </View>
  );
};

export default Login;
