import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadgerNewsItemScreen from "../screens/BadgerNewsItemScreen";
import BadgerNewsScreen from "../screens/BadgerNewsScreen";

const NewsStack = createNativeStackNavigator();

function BadgerNewsStack(props) {
    return <>
    <NewsStack.Navigator>
        <NewsStack.Screen name="allNews" component={BadgerNewsScreen} options={{title: "Articles"}}></NewsStack.Screen>
        <NewsStack.Screen name="Article" component={BadgerNewsItemScreen}></NewsStack.Screen>
    </NewsStack.Navigator>
    </>
}

export default BadgerNewsStack;