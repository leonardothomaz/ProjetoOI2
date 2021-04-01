import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function TextField(props: any) {
    const placeHolder = props.placeHolder;
    const inputType = props.inputType;

    if ( inputType === "password") {
        return (
            <View>
                <TextInput
                    style={styles.textField}
                    placeholder={placeHolder}
                    secureTextEntry={true}
                />            
            </View>
        );
    } else if ( inputType === "email") {
        return (
            <View>
                <TextInput
                    style={styles.textField}
                    placeholder={placeHolder}
                    autoCompleteType={"email"}
                    keyboardType={"email-address"}
                />            
            </View>
        );
    } else {
        return (
            <View>
                <TextInput
                    style={styles.textField}
                    placeholder={placeHolder}
                />            
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textField: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#000",
        height: 36,
        width: 300,
        margin: 15,
        padding: 10
    }
})
