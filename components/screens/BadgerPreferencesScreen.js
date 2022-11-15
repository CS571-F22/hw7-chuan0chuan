import { useContext, useState, useEffect } from "react";
import BadgerPreferenceSwitch from "../BadgerPreferenceSwitch";
import { View, ScrollView, Alert } from "react-native";
import BadgerPreferencesContext from "../../contexts/BadgerPreferencesContext";

function BadgerPreferencesScreen(props) {
    const [prefs, setPrefs] = useContext(BadgerPreferencesContext);
    useEffect(()=>{
        fetch("https://www.coletnelson.us/cs571/f22/hw7/api/news/tags")
        .then(res => res.json())
        .then(data => data.forEach(element => {
            setPrefs(pre=> ({...pre, [element] : true}))
        }));
    },[]);

    function change (name ) {
                setPrefs(pre=> ({...pre, [name]: ![name]}))
    }
    console.log(prefs)
    return <View>
            <BadgerPreferenceSwitch 
            handleToggle={change} prefName={Object.keys(prefs)[0]} initVal={Object.values(prefs)[0]}/>
            <BadgerPreferenceSwitch 
            handleToggle={change} prefName={Object.keys(prefs)[1]} initVal={Object.values(prefs)[1]}/>
            <BadgerPreferenceSwitch 
            handleToggle={change} prefName={Object.keys(prefs)[2]} initVal={Object.values(prefs)[2]}/>
            <BadgerPreferenceSwitch 
            handleToggle={change} prefName={Object.keys(prefs)[3]} initVal={Object.values(prefs)[3]}/>
            <BadgerPreferenceSwitch 
            handleToggle={change} prefName={Object.keys(prefs)[4]} initVal={Object.values(prefs)[4]}/>
            <BadgerPreferenceSwitch 
            handleToggle={change} prefName={Object.keys(prefs)[5]} initVal={Object.values(prefs)[5]}/>
    </View>
}

export default BadgerPreferencesScreen;