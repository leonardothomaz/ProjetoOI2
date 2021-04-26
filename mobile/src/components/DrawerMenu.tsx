import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import HomePage from "../pages/HomePage";
import Config from "../pages/Config";
import Report from "../pages/Report";
import UserProfile from "../pages/UserProfile";

export default function DrawerMenu() {
    return (
        <Drawer.Navigator
            initialRouteName="HomePage"
            drawerPosition={"right"}
        >
            <Drawer.Screen
                name="DrawerMenu"
                component={HomePage}
                options={{ drawerLabel: "HomePage" }}
            />
            <Drawer.Screen
                name="Config"
                component={Config}
                options={{ drawerLabel: "CONFIG" }}
            />
            <Drawer.Screen
                name="Report"
                component={Report}
                options={{ drawerLabel: "REPORT" }}
            />
            <Drawer.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ drawerLabel: "USER PROFILE" }}
            />
        </Drawer.Navigator>
    );
}
