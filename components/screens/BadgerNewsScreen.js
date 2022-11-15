import { useEffect, useState, useContext } from "react";
import { View, ScrollView,Text } from "react-native";
import { Card } from "react-native-paper";
import BadgerPreferencesContext from "../../contexts/BadgerPreferencesContext";
import BadgerNewsItemCard from "../BadgerNewsItemCard";

function BadgerNewsScreen(props) {
    const [prefs, setPrefs] = useContext(BadgerPreferencesContext);

    const[allnews, setAllnews] = useState([]);
    useEffect(()=>{
        fetch('https://www.coletnelson.us/cs571/f22/hw7/api/news/articles')
        .then(res => res.json())
        .then(json=>setAllnews(json))
    },[])

    useEffect(()=>{
        fetch("https://www.coletnelson.us/cs571/f22/hw7/api/news/tags")
        .then(res => res.json())
        .then(data => data.forEach(element => {
            setPrefs(pre=> ({...pre, [element] : true}))
        }));
    },[]);
   
    const condition = (element)=> element === true;

   if(Object.values(prefs).some(condition)){
    return <ScrollView>
            {allnews.map(news=> {
                return <BadgerNewsItemCard key={news.id}{...news}/>})
            }
        </ScrollView>
    }else{
        return<View>
        <Text style={{ fontSize: 23}}>There are no articles that fit your preferences!</Text>
    </View>
    }
}

export default BadgerNewsScreen;