import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Conheça a Rita, sua assistente para tomar remédios
            </Text>
            <Text style={styles.subTitle}>
                Rita foi criada para que você nunca mais esqueça de seus
                medicamentos
            </Text>
            <Button
                buttonText="Criar uma conta"
                buttonColor="blue"
                targetPage="Signup"
            />
            <Button
                buttonText="Entrar"
                buttonColor="login"
                targetPage="Login"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Montserrat_100Thin",
    },

    title: {
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },

    subTitle: {
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        margin: 5,
    }
});
