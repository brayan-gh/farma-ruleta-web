import { View, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const userName = "Carlos"; // Aquí puedes traerlo del contexto o backend

  return (
    <View style={styles.container}>
      {/* Bienvenida */}
      <Text style={styles.greeting}>Hola, {userName}</Text>
      <Text style={styles.subtitle}>¿Cómo podemos ayudarte hoy?</Text>

      {/* Tarjetas de acceso */}
      <Card style={styles.card} onPress={() => navigation.navigate("Record")}>
        <Card.Title
          title="Mi Salud"
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          subtitle="Revisa tu información de salud"
          subtitleNumberOfLines={null}
          subtitleEllipsizeMode="tail"
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="shield-plus"
              color="#137FEC"
              style={{ backgroundColor: "#E7F2FD" }}
            />
          )}
        />
      </Card>

      <Card style={styles.card} onPress={() => navigation.navigate("Treatments")}>
        <Card.Title
          title="Mis Tratamientos"
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          subtitle="Gestiona tus medicamentos y tratamientos"
          subtitleNumberOfLines={null}  // 👈 esto permite que no se corte
          subtitleEllipsizeMode="tail"
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="pill"
              color="#137FEC"
              style={{ backgroundColor: "#E7F2FD" }}
            />
          )}
        />
      </Card>

      <Card style={styles.card} onPress={() => navigation.navigate("Quotes")}>
        <Card.Title
          title="Mis Citas"
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          subtitle="Consulta tus próximas citas médicas"
          subtitleNumberOfLines={null}  // 👈 esto permite que no se corte
          subtitleEllipsizeMode="tail"
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="calendar"
              color="#137FEC"
              style={{ backgroundColor: "#E7F2FD" }}
            />
          )}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    marginBottom: 15,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: "#fff",
    padding:5
  },
});
