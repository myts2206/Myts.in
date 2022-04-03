import React, { useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Keyboard, Button } from "react-native";
import UndefinedTasks from "../components/UndefinedTasks";
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const HomeScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>
            {/* Added this scroll view to enable scrolling when list gets longer than the page */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

                {/* Today's Tasks */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>My To-Do List</Text>
                    <View style={styles.items}>
                        {/* This is where the tasks will go! */}
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                        <UndefinedTasks text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                </View>
            </ScrollView>
            <View style={styles.EntireScreen}>
                <Text style={styles.AddTask}>Click to ADD Tasks</Text>
                <View style={styles.WakeUp}>
                    <TouchableOpacity onPress={() => setTask("WakeUP")}>
                        < Ionicons style={styles.IconWakeUp} name="sunny-sharp" />
                        <Text>Wake UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Study}>
                    <TouchableOpacity onPress={() => setTask("Study")}>
                        <Entypo style={styles.IconStudy} name="open-book" />
                        <Text>Study</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Gym}>
                    <TouchableOpacity onPress={() => setTask("Gym")}>
                        <MaterialCommunityIcons style={styles.IconGym} name="weight-lifter" />
                        <Text>Hit the gym</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.Meditate}>
                    <TouchableOpacity onPress={() => setTask("Meditate")}>
                        <MaterialIcons style={styles.IconMeditate} name="self-improvement" />
                        <Text>Meditate</Text>
                    </TouchableOpacity>
                </View >


                <View style={styles.Innovate}>
                    <TouchableOpacity onPress={() => setTask("Innovate")}>
                        <MaterialCommunityIcons style={styles.IconInnovate} name="lightbulb-on-outline" />
                        <Text>Innovate</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Work}>
                    <TouchableOpacity onPress={() => setTask("Work")}>
                        <FontAwesome5 style={styles.IconWork} name="laptop-code" />
                        <Text>Work</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SelfTalk}>
                    <TouchableOpacity onPress={() => setTask("Self-Talk")}>
                        <Feather style={styles.IconSelfTalk} name="mic-off" />
                        <Text>Self-talk</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.Smile}>
                    <TouchableOpacity onPress={() => setTask("Smile")}>
                        <Fontisto style={styles.IconSmile} name="slightly-smile" />
                        <Text>Smile</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.Meeting}>
                    <TouchableOpacity onPress={() => setTask("Attend A Meeting")}>
                        <FontAwesome style={styles.IconMeeting} name="video-camera" />
                        <Text>Attend a meeting</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.HabituateATask}>
                    <TouchableOpacity onPress={() => setTask("Habituate a task")}>
                        <MaterialCommunityIcons name="fire" style={styles.IconHabituateATask} />
                        <Text>Habituate a task</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Pet}>
                    <TouchableOpacity onPress={() => setTask("Pet the Dog")}>
                        <FontAwesome5 name="dog" style={styles.IconPet} />
                        <Text>Pet</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Walk}>
                    <TouchableOpacity onPress={() => setTask("Go for a walk")}>
                        <FontAwesome5 name="walking" style={styles.IconWalk} />
                        <Text>Go for a walk</Text>
                    </TouchableOpacity>
                </View>
            </View >




            {/* Write a task */}
            {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <Button title="My Motivation"></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tasksWrapper: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 38,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    IconWakeUp: {
        fontSize: 35,
        left: 9,
    },

    WakeUp: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,



    },
    IconStudy: {
        fontSize: 35,
    },
    Study: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 102,
        marginTop: -90,
        borderRadius: 20
    },
    Gym: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 194,
        marginTop: -90,
        borderRadius: 20

    },
    IconGym: {
        fontSize: 35,
        left: 18
    },
    Meditate: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 286,
        marginTop: -90,
        borderRadius: 20
    },
    IconMeditate: {
        fontSize: 35,
        left: 10
    },
    Innovate: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
        marginTop: 1,
    },
    IconInnovate: {
        fontSize: 35,
        left: 9
    },
    Work: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 102,
        marginTop: -90,
        borderRadius: 20
    },
    IconWork: {
        fontSize: 35,

    },
    SelfTalk: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 194,
        marginTop: -90,
        borderRadius: 20
    },
    IconSelfTalk: {
        fontSize: 35,
        left: 7
    },
    Smile: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 286,
        marginTop: -90,
        borderRadius: 20
    },
    IconSmile: {
        fontSize: 35,
    },
    Meeting: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
        marginTop: 1
    },
    IconMeeting: {
        fontSize: 35,
        left: 11
    },
    HabituateATask: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 102,
        marginTop: -90,
        borderRadius: 20

    },
    IconHabituateATask: {
        fontSize: 35,
        left: 20
    },
    Pet: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 194,
        marginTop: -90,
        borderRadius: 20
    },
    IconPet: {
        fontSize: 35,
    },
    Walk: {
        height: 90,
        width: 90,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 286,
        marginTop: -90,
        borderRadius: 20
    },
    IconWalk: {
        fontSize: 35,
        left: 30
    },
    EntireScreen: {
        marginTop: 320,
        position: "absolute",
    },
    AddTask: {
        fontSize: 20,
        marginLeft: 105,

    }


})

export default HomeScreen;
