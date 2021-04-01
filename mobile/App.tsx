import React from "react";

import Routes from "./src/routes";
import { useFonts } from "expo-font";
import { Montserrat_100Thin } from "@expo-google-fonts/montserrat";

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_100Thin,
    });

    if (!fontsLoaded) {
        return null;
    }
    return <Routes />;
}
