import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from '../../components/Button';
import TextField from '../../components/TextField';

export default function AddMedicine() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agora me conta...</Text>
            <Text>Quais medicamento você anda tomando hoje em dia?</Text>

            <TextField placeHolder="Ex: Dipirona"/>
            <Button buttonText="Próximo" buttonColor="blue" targetPage="HomePage" />

            <Button buttonText="Pular" targetPage="HomePage" />

        </View>
    )
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
        padding: 15
    },
});
