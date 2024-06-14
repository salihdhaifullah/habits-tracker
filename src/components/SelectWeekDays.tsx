import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { WeekDays, weekDays } from '../utils';
import React from 'react';
import Button from '../components/Button';


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

export default SelectWeekDays;
