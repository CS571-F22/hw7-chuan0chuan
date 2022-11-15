import { Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BadgerNewsScreen from "../screens/BadgerNewsScreen"
import BadgerNewsStack from "./BadgerNewsStack"
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen"
import { Ionicons } from "@expo/vector-icons";
import { View, Image, StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();

function BadgerTabs(props) {
    return <>
     <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style:{
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 13,
                height:80,
            }
        }}>
        <Tab.Screen name="News" component={BadgerNewsStack} 
        options={{ headerShown: false,
        tabBarIcon:({focused})=> (
            <View style={{alignItems: "center",justifyContent:"center", top:10}}>
                <Ionicons resizeMode="contain"name="newspaper-outline" size={32} style={{color: focused? "darksalmon": "grey"}}></Ionicons>
                    <Text style={{fontSize: 20,color: focused? "darksalmon": "grey"}}>News</Text>
            </View>)}}/>
    
        <Tab.Screen name="Preferences" component={BadgerPreferencesScreen} 
        options={{title : "Preferences", 
        tabBarIcon:({focused})=> (
            <View style={{alignItems: "center",justifyContent:"center", top:10}}>
                <Ionicons name="settings-outline" size={32} style={{color: focused? "darksalmon": "grey"}}> </Ionicons>
                    <Text style={{fontSize: 20, color: focused? "darksalmon": "grey"}}>Preferences</Text>
            </View>)}}/>
    </Tab.Navigator>
    </>
}

export default BadgerTabs;

const style =StyleSheet