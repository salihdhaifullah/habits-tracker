import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
import { Habit, WeekDays, weekDays } from '../db';

// Assume you have imported SQLite and defined WeekDays enum

const HabitForm = ({ onSave }: { onSave: (h: Habit) => void }) => {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [order, setOrder] = useState('');
    const [points, setPoints] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDays, setSelectedDays] = useState<WeekDays[]>([]);

    const handleSave = () => {
        const habit = new Habit(name, icon, parseInt(order), parseInt(points), selectedDays, description);
        onSave(habit);
    };

    return (
        <View style={styles.formView}>
            <Text>Name:</Text>
            <TextInput cursorColor={"#000000"} placeholder='Name' style={styles.input} value={name} onChangeText={setName} />

            <Text>Icon:</Text>
            <TextInput cursorColor={"#000000"} style={styles.input} value={icon} onChangeText={setIcon} />

            <Text>Order:</Text>
            <TextInput cursorColor={"#000000"} style={styles.input} value={order} onChangeText={setOrder} keyboardType="numeric" />

            <Text>Points:</Text>
            <TextInput cursorColor={"#000000"} style={styles.input} value={points} onChangeText={setPoints} keyboardType="numeric" />

            <Text>Description:</Text>
            <TextInput cursorColor={"#000000"} style={styles.input} value={description} onChangeText={setDescription} />

            <Text>Days:</Text>
            {weekDays.map(day => (
                <View key={day}>
                    <Text>{day}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={selectedDays.includes(day) ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={checked => {
                            if (checked) {
                                setSelectedDays([...selectedDays, day]);
                            } else {
                                setSelectedDays(selectedDays.filter(d => d !== day));
                            }
                        }}
                        value={selectedDays.includes(day)}
                    />
                </View>
            ))}

            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

export default HabitForm;


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    formView: {
        backgroundColor: "#ffffff",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: "#000000",
        shadowRadius: 15,
        marginBottom: 20,
        shadowOffset: {
            width: 10,
            height: 20
        }
    }
});