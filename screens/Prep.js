import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
const Prep = (props) => {
    return (
        <View>
            <Text>Select the subject</Text>
            <Button title="Math" onPress={() => props.navigation.navigate("MathPrep")} />
            <Button title="Physics" onPress={() => props.navigation.navigate("PhysPrep")} />
            <Button title="Electrical" onPress={() => props.navigation.navigate("ElectricalPrep")} />
            <Button title="Bes" onPress={() => props.navigation.navigate("BesPrep")} />
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 40
    }
})
export default Prep;