import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Button from '../components/Button';
import TextField from '../components/TextField';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça login para acessar sua conta</Text>

            <TextField inputType="email" placeHolder="Insira seu email" />
            <TextField inputType="password" placeHolder="Insira uma senha" />

            <Button buttonText="Entrar" buttonColor="blue" targetPage="AddMedicine" />

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
        padding: 15
    },
});