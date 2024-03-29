import { useCallback, useEffect, useState } from "react";
import { Alert, Switch, Text, View } from "react-native";
import { Card } from "react-native-paper";

function BadgerPreferenceSwitch(props) {
    const [isOn, setIsOn] = useState(props.initVal ? props.initVal : false)

    useEffect(() => props.handleToggle(props.prefName, isOn), [isOn]);
    
    const toggle = useCallback(() => setIsOn(prev => !prev), [setIsOn]);
    const showHint = useCallback(() =>  Alert.alert('Help', isOn ? 
        `Toggle off to hide content related to ${props.prefName}!`
        : 
        `Toggle on to show content related to ${props.prefName}!`)
    );

    return <Card onPress={showHint} style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', color:'red' }}>
            <Text>{props.prefName}</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Switch
                trackColor={{true: 'darksalmon', false: 'lightgrey'}}
                thumbColor={isOn ? 'crimson' : 'grey'}
                onValueChange={toggle}
                value={isOn}
            />
        </View>
    </Card>
}

export default BadgerPreferenceSwitch;