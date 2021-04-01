import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

import Button from "../../components/Button";
import TextField from "../../components/TextField";

import {
    ProgressBar,
    Colors,
    ActivityIndicator,
    Drawer,
} from "react-native-paper";

export default function Password() {
    const [password, setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            <ProgressBar
                progress={0.85}
                color={Colors.blue900}
                style={styles.progressBar}
                // indeterminate={true}
            />

            <Feather name="lock" size={90} color="#333" />
            <Text style={styles.title}>Crie uma senha</Text>
            <Text style={styles.title}>
                Crie uma senha forte para melhor segurança de seus dados.
            </Text>

            <TextField inputType="password" placeHolder="Digite uma senha" />
            <TextField inputType="password" placeHolder="Confirme a senha" />

            <Button
                buttonText="Finalizar"
                buttonColor="blue"
                targetPage="AddMedicine"
            />

            <ProgressBar
                color={Colors.green400}
                style={styles.progressBar}
                indeterminate={true}
            />

            <ActivityIndicator
                animating={true}
                color={Colors.green400}
                hidesWhenStopped={true}
                size={"large"}
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
    },

    title: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        padding: 15,
    },

    progressBar: {
        width: 300,
        marginTop: 15,
    },
});
