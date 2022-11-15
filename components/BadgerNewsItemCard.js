import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card,} from "react-native-paper";
import { useEffect, useState, useContext } from "react";
import BadgerPreferencesContext from "../contexts/BadgerPreferencesContext";

function BadgerNewsItemCard(props) {
  
  const [prefs, setPrefs] = useContext(BadgerPreferencesContext);
    const navigation = useNavigation();

    const learnMore = () => {
        navigation.push("Article", props)
      }

    if(prefs[props.tags[0]] == true){
    return <Card onPress={learnMore} style={Styles.container}>
                <Image style={{width:365, height: 200, margin:3}} source={{uri: props.img}}></Image>
                <Text style={{ fontSize: 20, fontWeight: "bold"}}>{props.title} </Text>
        </Card>}
    else {
      return null;
    }
    
}

export default BadgerNewsItemCard;

const Styles = StyleSheet.create({
  container :{
    alignItem: 'center',
    margin:10
  }
})