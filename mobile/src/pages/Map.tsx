import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function Map() {
    // User position data mock
    const userPosition = { latitude: -25.7467895, longitude: -53.0624491 };

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: userPosition.latitude,
                    longitude: userPosition.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                    //Longitude delta === zoom
                }}
                style={styles.mapStyle}
            >
                <Marker
                    coordinate={{
                        latitude: userPosition.latitude,
                        longitude: userPosition.longitude
                    }}
                    icon={4}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },

    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
