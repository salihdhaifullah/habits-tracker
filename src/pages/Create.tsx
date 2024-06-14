import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { WeekDays } from '../utils';
import icons from '../db/icons';
import { FontAwesome6Icon } from '../utils';
import React from 'react';
import Button from '../components/Button';
import PageModal from '../components/Modal';
import SelectWeekDays from '../components/SelectWeekDays';
import SelectIcon from '../components/SelectIcon';

const Create = () => {
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(10);
    const [icon, setIcon] = useState<FontAwesome6Icon>(icons[0]);
    const [weekDays, setWeekDays] = useState<WeekDays[]>([]);


    const [v, setV] = useState(false)
    return (
        <View className='flex-1 justify-center items-center'>
            <View className='bg-white p-4 rounded-md gap-2'>
                {/* TO-DO: use react native modal and animation */}
                <SelectIcon setState={setIcon} />

                {/* use custom nice design for text input */}
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                    placeholder="Enter text..."
                    onChangeText={setTitle}
                    value={title}
                />

                {/* use number input like the web */}
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                    placeholder="Enter number..."
                    keyboardType="numeric"
                    onChangeText={(e) => setPoints(Number(e))}
                    value={points.toString()}
                />

                {/* TO-DO: use react native modal and animation and better design */}
                <SelectWeekDays setState={setWeekDays} />


                <Button onPress={() => setV(true)}>
                    <Text>Open</Text>
                </Button>

                <PageModal visible={v} onClose={() => setV(false)} title='Create Habit' />

            </View>
        </View>
    )
}


export default Create;








