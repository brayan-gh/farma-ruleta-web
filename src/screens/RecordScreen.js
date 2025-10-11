import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // para el icono del lápiz

export default function RecordScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                {/* Datos principales */}
                <View style={styles.cardRow}>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Altura</Text>
                        <Text style={styles.cardValue}>175 cm</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Peso</Text>
                        <Text style={styles.cardValue}>72 kg</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>IMC</Text>
                        <Text style={styles.cardValue}>23.5</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Tipo de Sangre</Text>
                        <Text style={styles.cardValue}>O+</Text>
                    </View>
                </View>
                    <Text style={styles.sectionTitle}>Alergias</Text>

                {/* Alergias */}
                <View style={styles.section}>
                    <View style={styles.list}>
                        <Text>• Penicilina</Text>
                        <Text>• Polvo</Text>
                        <Text>• Mariscos</Text>
                    </View>
                </View>
                    <Text style={styles.sectionTitle}>Enfermedades Crónicas</Text>

                {/* Enfermedades Crónicas */}
                <View style={styles.section}>
                    <View style={styles.list}>
                        <Text>• Hipertensión Arterial (Controlada)</Text>
                        <Text>• Miopía</Text>
                    </View>
                </View>
                    <Text style={styles.sectionTitle}>Notas Médicas</Text>

                {/* Notas Médicas */}
                <View style={styles.section}>
                    <Text style={styles.notes}>
                        Paciente refiere buena adherencia al tratamiento para la hipertensión.{"\n"}
                        Se recomienda seguimiento oftalmológico anual para la miopía.{"\n"}
                        Evitar exposición a alérgenos conocidos.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f4f6",
    },
    scroll: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    cardRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        width: "48%",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems:'center'
    },
    cardLabel: {
        color: "#6b7280",
        marginBottom: 4,
    },
    cardValue: {
        fontSize: 20,
        fontWeight: "bold",
    },
    section: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    list: {
        marginLeft: 8,
    },
    notes: {
        lineHeight: 20,
    },
});
