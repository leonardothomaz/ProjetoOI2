import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

// Project created components
import Button from "../../components/Button";
import TextField from "../../components/TextField";

// React native papers components
import {
    ProgressBar,
    TextInput,
    Colors,
    DefaultTheme,
} from "react-native-paper";

export default function Signup() {
    const theme = {
        ...DefaultTheme,
        roundness: 15,
        colors: {
            ...DefaultTheme.colors,
            primary: "#3498db",
            accent: "#f1c40f",
        },
    };

    const [email, setEmail] = useState("");
    const [statusProgress, setStatusProgress] = useState(0.1);

    return (
        <View style={styles.container}>
            <ProgressBar
                progress={statusProgress}
                color={Colors.blue900}
                style={styles.progressBar}
            />

            <Feather name="mail" size={90} color="#333" />
            <Text style={styles.title}>
                Qual é o seu email?: {statusProgress}
            </Text>
            <Text style={styles.title}>
                Enviaremos para esse endereço um email de verificação ara
                confirmar sua conta.
            </Text>

            {/* <TextField inputType="email" placeHolder="Digite seu email" onChange/> */}
            <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Digite seu email"
                mode="outlined"
                // selectionColor={Colors.blue400}
                // underlineColor={Colors.blue400}
                style={styles.textInput}
                theme={theme}
                keyboardType="email-address"
                secureTextEntry={true}
            />

            <Button
                buttonText="Continuar"
                buttonColor="blue"
                targetPage="Password"
            />

            <Button buttonText="Já possui uma conta?" targetPage="Login" />
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
    },

    textInput: {
        width: 350,
    },
});
