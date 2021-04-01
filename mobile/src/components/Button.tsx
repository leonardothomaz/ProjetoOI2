import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Button(props: any) {
    const navigation = useNavigation();
    
    //Button props
    const text = props.buttonText;
    const color = props.buttonColor;
    const targetPage = props.targetPage;

    function handleNavigateToSignup() {
        navigation.navigate(targetPage);
    }

    if (color === "blue") {
        return (
            <TouchableOpacity style={styles.blueButton} onPress={handleNavigateToSignup}>
                <Text style={styles.blueButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    } else if (color === "login") {
        return (
            <TouchableOpacity style={styles.loginButton} onPress={handleNavigateToSignup}>
                <Text style={styles.loginButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }
    else if (color === "white") {
        return (
            <TouchableOpacity style={styles.whiteButton} onPress={handleNavigateToSignup}>
                <Text style={styles.whiteButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }
    else {
        return (
            <TouchableOpacity onPress={handleNavigateToSignup}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    blueButton: {
        backgroundColor: "#2F80ED",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        height: 36,
        width: 300,
        marginTop: 15,
    },

    whiteButton: {
        backgroundColor: "#FFF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        height: 36,
        width: 300,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#000",
    },

    loginButton: {
        backgroundColor: "#FFF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        height: 36,
        width: 300,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#2F80ED",
    },

    blueButtonText: {
        fontSize: 16,
        color: "#FFF",
    },

    whiteButtonText: {
        fontSize: 16,
        color: "#000",
    },

    loginButtonText: {
        fontSize: 16,
        color: "#2F80ED",
    },

    text: {
        padding: 15
    }
});
