import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { WeekDays, weekDays } from '../utils';
import { FontAwesome6 } from '@expo/vector-icons';
import icons from '../db/icons';
import { FontAwesome6Icon } from '../utils';
import React from 'react';
import Button from '../components/Button';

const Create = () => {
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(10);
    const [icon, setIcon] = useState<FontAwesome6Icon>(icons[0]);
    const [weekDays, setWeekDays] = useState<WeekDays[]>([]);


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


                <View className='flex flex-row justify-evenly'>
                    <Button>
                        <Text>create</Text>
                    </Button>
                    <Button>
                        <Text>cancel</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}


export default Create;







const SelectIcon = (props: { setState: (icon: FontAwesome6Icon) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null);


    return (
        <>
            <Modal
                animationType="slide"
                visible={isOpen}
                onRequestClose={() => {
                    setIsOpen(false);
                    setActiveIcon(null);
                }}
                className='bg-primary'>

                <View className='p-2 w-full flex-row justify-between items-center'>
                    <Button onPress={() => setIsOpen(false)}>
                        <Text>Cancel</Text>
                    </Button>

                    <Button disabled={activeIcon === null} onPress={() => {
                        props.setState(activeIcon)
                        setIsOpen(false)
                    }}>
                        <Text>Done</Text>
                    </Button>
                </View>

                <ScrollView>
                    <View className='flex flex-row gap-y-4 flex-wrap justify-between py-10 px-2 w-full bg-primary'>
                        {icons.map((item, index) => (
                            <Pressable
                                onPress={() => setActiveIcon(item)}
                                className='p-2 w-20 bg-white rounded-md border-2 flex justify-center items-center'
                                key={index}
                                style={activeIcon !== item ? null : { backgroundColor: "rgb(74, 222, 128)" }}
                            >
                                <FontAwesome6 name={item} size={34} />
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>

            </Modal>

            <Button onPress={() => setIsOpen(true)}>
                <Text>Select Icon</Text>
            </Button>
        </>
    );
}


const SelectWeekDays = (props: { setState: Dispatch<SetStateAction<WeekDays[]>> }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handelSelect = useCallback((weekDay: WeekDays) => {
        props.setState((prev) => [...prev, weekDay])
        setIsOpen(false)
    }, [])

    return (
        <>
            <Modal
                animationType="slide"
                visible={isOpen}
                onRequestClose={() => {
                    setIsOpen(false);
                }}
                className='bg-primary'>
                <View className='w-full bg-white flex-row justify-between p-2 '>
                    <Button onPress={() => setIsOpen(false)}>
                        <Text>Cancel</Text>
                    </Button>

                    <Button onPress={() => setIsOpen(false)}>
                        <Text>Done</Text>
                    </Button>
                </View>

                <View className='flex flex-row gap-y-4 flex-wrap justify-between w-full'>
                    {weekDays.map((item, index) => (
                        <TouchableOpacity onPress={() => handelSelect(item)} className='p-2 w-fit bg-yellow-600 m-2 rounded-2xl' key={index}>
                            <Text>{WeekDays[item]}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>
            <Button onPress={() => setIsOpen(true)}>
                <Text>Select Weekdays</Text>
            </Button>
        </>
    )
}
