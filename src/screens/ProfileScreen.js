import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Avatar.Image
        size={100}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/008/844/895/non_2x/user-icon-design-free-png.png",
        }}
        style={styles.avatar}
      />

      {/* User Info */}
      <Text style={styles.name}>Carlos Rodriguez</Text>
      <Text style={styles.email}>carlos.rodriguez@example.com</Text>

      {/* Personal Info Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Información Personal</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Género</Text>
            <Text style={styles.value}>Masculino</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Text style={styles.label}>Edad</Text>
            <Text style={styles.value}>38 años</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <Text style={styles.value}>20 de Agosto de 1985</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Text style={styles.label}>Número de Teléfono</Text>
            <Text style={styles.value}>+34 612 345 678</Text>
          </View>
        </Card.Content>
      </Card>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name="logout" size={20} color="#FF4444" style={{ marginRight: 8 }} />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C2526",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#FFF",
    elevation: 2,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C2526",
    marginBottom: 10,
  },
  infoRow: {
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 14,
    color: "#1C2526",
  },
  value: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  separator: {
    marginVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    marginBottom: 8
  },
  logoutButton: {
    backgroundColor: "#FFE6E6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#FF4444",
    fontSize: 16,
    fontWeight: "bold",
  },
});

