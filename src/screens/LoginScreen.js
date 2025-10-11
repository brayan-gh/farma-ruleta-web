import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validaciones con Yup
const schema = yup.object().shape({
  email: yup.string().email("Formato de correo incorrecto.").required("El correo es obligatorio."),
  password: yup.string().min(6, "La contraseña es demasiado corta.").required("La contraseña es obligatoria."),
});

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      {/* Icono superior */}
      <IconButton icon="information" size={60} iconColor="#2979FF" />

      {/* Bienvenida */}
      <Text style={styles.title}>¡Bienvenido!</Text>

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Correo electrónico"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            left={<TextInput.Icon icon="email" />}
            error={!!errors.email}
            style={styles.input}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Contraseña"
            mode="outlined"
            secureTextEntry={!showPassword}
            value={value}
            onChangeText={onChange}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            error={!!errors.password}
            style={styles.input}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button mode="contained" style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
        Iniciar sesión
      </Button>

      <Text style={{ marginVertical: 10, color: "gray" }}>──────────  O  ──────────</Text>

      <Button
        mode="outlined"
        icon="google"
        textColor="black"
        style={styles.googleButton}
        onPress={() => console.log("Google login")}
      >
        Acceder con Google
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 5,
  },
  error: {
    alignSelf: "flex-start",
    color: "red",
    marginBottom: 10,
  },
  loginButton: {
    width: "100%",
    marginTop: 15,
    padding: 5,
    backgroundColor: '#137FEC',
    borderRadius: 10
  },
  googleButton: {
    width: "100%",
    borderColor: "#ccc",
    padding: 5,
  },
});
