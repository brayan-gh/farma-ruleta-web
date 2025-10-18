import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { signInWithCredential, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Ajusta la ruta

WebBrowser.maybeCompleteAuthSession();

// Esquema de validación
const schema = yup.object().shape({
  email: yup.string().email("Formato de correo incorrecto.").required("El correo es obligatorio."),
  password: yup.string().min(6, "La contraseña es demasiado corta.").required("La contraseña es obligatoria."),
});

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);

  // Configuración de Google Auth con Expo
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "902685275857-7cb01drot15k5cechdcn6naji89p2m11.apps.googleusercontent.com",
    webClientId: "902685275857-7cb01drot15k5cechdcn6naji89p2m11.apps.googleusercontent.com",
    androidClientId: "902685275857-ihlmbcsu31uddkih6mibg2egh49cc5ff.apps.googleusercontent.com",
    iosClientId: "902685275857-j9a0g9kgkum4tamr0f8c9qc74bqdtq7l.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      const { idToken } = authentication;
      if (idToken) {
        const credential = GoogleAuthProvider.credential(idToken);
        signInWithCredential(auth, credential).catch((err) => {
          console.log("Error al autenticar con Firebase:", err);
        });
      }
    }
  }, [response]);

  // ✅ Detectar usuario logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        navigation.replace("MainTabs");
      }
    });
    return unsubscribe;
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    navigation.replace("MainTabs");
  };

  return (
    <View style={styles.container}>
      <IconButton icon="information" size={60} iconColor="#2979FF" />
      <Text style={styles.title}>¡Bienvenido!</Text>

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
        disabled={!request}
        onPress={() => promptAsync()}
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
