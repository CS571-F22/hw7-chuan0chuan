import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Image, Text, ScrollView} from "react-native";
//There are no articles that fit your preferences!
function BadgerNewsItemScreen(props) {
    const details = props.route.params;
    const[body, setBody] = useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        fetch(`https://www.coletnelson.us/cs571/f22/hw7/api/news/articles/${details.id}`)
        .then(res => res.json())
        .then(json => setBody(json.body));
    },[]);
    
     if (body.length === 0){
    return <ScrollView>
            <Image source={{uri: details.img}} style={{width: 430, height: 250}}/>
            <Text style={{ fontSize: 18, fontWeight: "bold"}}>{details.title}</Text>
            <Text style={{ fontSize: 16}} >The content is loading!</Text>
    </ScrollView>}
    else{
        return <ScrollView>
            <Image source={{uri: details.img}} style={{width: 430, height: 250}}/>
            <Text style={{ fontSize: 18, fontWeight: "bold"}}>{details.title}</Text>
            <Text>{details.body}</Text>
            <Text>{body}</Text>
    </ScrollView>
    }
}

export default BadgerNewsItemScreen;