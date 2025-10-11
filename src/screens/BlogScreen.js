import React from "react";
import { View, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function BlogScreen() {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Tarjeta 1 */}
                <Text style={styles.sectionTitle}>Nuevos tratamientos para la diabetes</Text>
                <Card style={styles.card}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/100x150" }}
                        accessibilityLabel="Imagen 1"
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </Card>

                {/* Tarjeta 2 */}
                <Text style={styles.sectionTitle}>Consejos para una dieta saludable</Text>
                <Card style={styles.card}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/300x200" }}
                        accessibilityLabel="Imagen 1"
                        style={styles.cardImageFull}
                        resizeMode="cover"
                    />
                </Card>

                {/* Tarjeta 3 */}
                <Text style={styles.sectionTitle}>Manejo del estrés en la vida diaria</Text>
                <Card style={styles.card}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/300x200" }}
                        accessibilityLabel="Imagen 1"
                        style={styles.cardImageFull}
                        resizeMode="cover"
                    />
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#F7F9FC",
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1C2526",
        marginBottom: 10,
    },
    card: {
        borderRadius: 12,
        marginBottom: 20,
        overflow: "hidden",
        elevation: 2,
    },
    cardImage: {
        width: 100,
        height: 150,
        alignSelf: "center",
        marginVertical: 10,
    },
    cardImageFull: {
        width: width - 40,
        height: undefined,
        aspectRatio: 16 / 9,
    }

});
