import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import EarningsScreen from "../screens/EarningsScreen";
// import PaymentMethodScreen from "../screens/PaymentMethodScreen";
// import PaymentCardScreen from "../screens/PaymentCardScreen";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();

const earningsDrawer = () => {
    return(
        <Drawer.Navigator initialRouteName = "Home">
            <Drawer.Screen name = "Home" component = {HomeScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "home" size = {25}/>}
                }}
            />
            <Drawer.Screen name = "Orders" component={OrdersScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cart" size = {25}/>},
                    drawerLockMode: 'unlocked'
                }}
            />
            <Drawer.Screen name = "Profile" component={ProfileScreen}
                options = {{ 
                    drawerIcon: () => { return <Icon name = "account" size = {25}/>}
                }}
            />
        </Drawer.Navigator>
    )
}

export default earningsDrawer