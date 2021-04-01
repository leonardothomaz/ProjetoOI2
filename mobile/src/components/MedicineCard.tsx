import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons';

export default function MedicineCard(props: any) {
    //Medicine infos props
    const medicineHour = props.medicineHour;
    const medicineName = props.medicineName;

    return (
        <View style={styles.medicineCard}>
            <TouchableOpacity>
                <Text style={styles.medicineTitle}>{medicineName}</Text>
                <Text style={styles.medicineInfo}>
                    Próxima ingestão: <Feather name="clock" size={14} color="#333" /> {medicineHour}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    medicineCard: {
        borderColor: "#333",
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        padding: 15,

        width: 350
    },

    medicineTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },

    medicineInfo: {
        color: "#333",
    },
});
