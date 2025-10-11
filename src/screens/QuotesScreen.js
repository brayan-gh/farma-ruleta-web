import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

const citas = [
    {
        id: 1,
        fecha: "Lunes, 25 de Julio 2024",
        hora: "10:30 AM",
        doctor: "Dr. Alejandro Pérez",
        especialidad: "Cardiología",
        estado: "Por asistir",
    },
    {
        id: 2,
        fecha: "Miércoles, 10 de Julio 2024",
        hora: "09:00 AM",
        doctor: "Dra. María González",
        especialidad: "Dermatología",
        estado: "Asistida",
    },
    {
        id: 3,
        fecha: "Viernes, 28 de Junio 2024",
        hora: "02:00 PM",
        doctor: "Dr. Juan Rodríguez",
        especialidad: "Medicina General",
        estado: "Cancelada",
    },
    {
        id: 4,
        fecha: "Lunes, 03 de Junio 2024",
        hora: "11:00 AM",
        doctor: "Dr. Carlos López",
        especialidad: "Oftalmología",
        estado: "Asistida",
    },
];

export default function QuotesScreen() {
    const [filtro, setFiltro] = useState("Todas");

    const citasFiltradas =
        filtro === "Todas"
            ? citas
            : citas.filter((cita) => cita.estado === filtro);

    return (
        <View style={styles.container}>
            {/* Filtros */}
            <View style={styles.filterRow}>
                {["Todas", "Por asistir", "Asistida"].map((item) => (
                    <Button
                        key={item}
                        mode={filtro === item ? "contained" : "outlined"}
                        style={styles.filterButton}
                        onPress={() => setFiltro(item)}
                    >
                        {item}
                    </Button>
                ))}
            </View>

            {/* Lista de citas */}
            <ScrollView style={styles.scroll}>
                {citasFiltradas.map((cita) => (
                    <View key={cita.id} style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.fecha}>{cita.fecha}</Text>
                            <View
                                style={[
                                    styles.estadoBadge,
                                    cita.estado === "Por asistir"
                                        ? styles.porAsistir
                                        : cita.estado === "Asistida"
                                            ? styles.asistida
                                            : styles.cancelada,
                                ]}
                            >
                                <Text style={styles.estadoTexto}>{cita.estado}</Text>
                            </View>
                        </View>
                        <Text style={styles.hora}>{cita.hora}</Text>
                        <Text style={styles.doctor}>{cita.doctor}</Text>
                        <Text style={styles.especialidad}>{cita.especialidad}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f8fa",
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    filterRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15,
    },
    filterButton: {
        borderRadius: 20,
    },
    scroll: {
        flex: 1,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    fecha: {
        fontWeight: "bold",
        fontSize: 14,
    },
    hora: {
        fontSize: 13,
        color: "#555",
        marginBottom: 5,
    },
    doctor: {
        fontWeight: "600",
        fontSize: 16,
    },
    especialidad: {
        fontSize: 14,
        color: "#777",
    },
    estadoBadge: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    estadoTexto: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "600",
    },
    porAsistir: {
        backgroundColor: "#ffa94d",
    },
    asistida: {
        backgroundColor: "#69db7c",
    },
    cancelada: {
        backgroundColor: "#ff6b6b",
    },
});
