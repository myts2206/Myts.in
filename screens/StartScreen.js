import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const StartScreen = (props) => {
    return (
        <View>
            <Text>Myts.in</Text>
            <Button onPress={() => props.navigation.navigate('Home')} title="My To-Do" />
            <Button onPress={() => props.navigation.navigate("Prepo")} title="My Prep" />
            <Button title="My Readings" />

        </View>
    )
}
const styles = StyleSheet.create({
    Text: {
        fontSize: 40
    }
})
export default StartScreen;