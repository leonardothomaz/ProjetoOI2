import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MyButton from "../components/Button";
import MedicineCard from "../components/MedicineCard";

import { Feather } from "@expo/vector-icons";

export default function HomePage() {
    //Username mock
    const userName = "Fulano";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Olá {userName}, aqui estão suas próximas medicações
            </Text>

            <MedicineCard medicineName="Invermectina" medicineHour="12:00" />
            <MedicineCard medicineName="Dipirona" medicineHour="15:00" />
            <MedicineCard medicineName="UN" medicineHour="02:00" />

            <MyButton
                buttonText="Adicionar medicação"
                buttonColor="blue"
                targetPage="AddMedicine"
            />

            <MyButton
                buttonText={<Feather name="map" color="#333" size={40} />}
                targetPage="Map"
            />

            <TouchableOpacity onPress={() => ({})}>
                <Feather name="menu" color="#333" size={40} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        padding: 15,
    },
});
