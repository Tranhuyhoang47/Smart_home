import React from "react";
import SignIn from './screens/Sign_in';
import SignUp from './screens/Sign_up';
import Bed_room from "./screens/Bed_room";

import {createStackNavigator} from '@react-navigation/stack';
import App from "../../../App";
const Stack = createStackNavigator();

export const AuthencationNavigator: React.FC = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Sign_up" component={SignUp}/>
            <Stack.Screen name="Sign_in" component={SignIn}/>
            <Stack.Screen name="Bed_room" component={Bed_room}/>
        </Stack.Navigator>
    );
};