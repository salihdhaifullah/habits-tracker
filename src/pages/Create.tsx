import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Button, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Unit, WeekDays, weekDays } from '../utils';
import { FontAwesome6 } from '@expo/vector-icons';
import icons from '../db/icons';
import { FontAwesome6Icon } from '../utils';
import React from 'react';
import { Habit } from '../db';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Create = () => {
    const [name, setName] = useState("");
    const [points, setPoints] = useState(10);
    const [icon, setIcon] = useState<FontAwesome6Icon>(icons[0]);
    const [weekDays, setWeekDays] = useState<WeekDays[]>([]);
    const [unit, setUnit] = useState(Unit.Binary);
    const [amount, setAmount] = useState(1);

    const create = useCallback(() => {
        new Habit(name, icon, points, weekDays, unit, amount, null)
    }, [])


    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <View className='flex-1'>
            {/* TODO: use reactnative modal and anmation
            <SelectIcon setState={setIcon} />

            {/* use custom nice desgin for text input */}
            {/* <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                placeholder="Enter text..."
                onChangeText={setName}
                value={name}
            /> */}

            {/* use number input like the web */}
            {/* <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                placeholder="Enter number..."
                keyboardType="numeric"
                onChangeText={(e) => setPoints(Number(e))}
                value={points.toString()}
            /> */}

            {/* TODO: use reactnative modal and anmation and better desgin */}
            {/* <SelectWeekDays setState={setWeekDays} /> */}

            {/* TODO: use reactnative modal and anmation and better desgin */}
            {/* <SelectUnit setState={setUnit} /> */}

            {/* TODO: use reactnative modal and anmation and better desgin */}
            {/* <SelectAmount setState={setAmount} unit={unit} />  */}


            <TimePicker setState={setAmount} />
        </View>
    )
}


export default Create;



const SelectIcon = (props: { setState: (icon: FontAwesome6Icon) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handelSelect = useCallback((icons: FontAwesome6Icon) => {
        props.setState(icons)
        setIsOpen(false)
    }, [])

    return isOpen ? (
        <View className='absolute top-0 left-0 w-screen h-screen'>
            <ScrollView>
                <View className='flex flex-row gap-y-4 flex-wrap justify-between w-full'>
                    {icons.map((item, index) => (
                        <Pressable onPress={() => handelSelect(item)} className='p-2 w-20 bg-white rounded-md flex justify-center items-center text-primary shadow-md' key={index}>
                            <FontAwesome6 name={item} size={34} />
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </View>
    ) : (
        <Button onPress={() => setIsOpen(true)} title='Select Icon' />
    );
}

const SelectUnit = (props: { setState: (icon: Unit) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handelSelect = useCallback((icons: Unit) => {
        props.setState(icons)
        setIsOpen(false)
    }, [])

    return isOpen ? (
        <View className='absolute top-0 left-0 w-screen h-screen'>
            <View className='flex flex-row gap-y-4 flex-wrap justify-between w-full'>
                <Pressable onPress={() => handelSelect(Unit.Binary)} className='p-2 w-full bg-white text-primary'>
                    <Text>Yes or No</Text>
                </Pressable>

                <Pressable onPress={() => handelSelect(Unit.Count)} className='p-2 w-full bg-white text-primary'>
                    <Text>With Numeric Value</Text>
                </Pressable>

                <Pressable onPress={() => handelSelect(Unit.Time)} className='p-2 w-full bg-white text-primary'>
                    <Text>With Time</Text>
                </Pressable>
            </View>
        </View>
    ) : (
        <Button onPress={() => setIsOpen(true)} title='Unit Of measurement' />
    );
}

const SelectWeekDays = (props: { setState: Dispatch<SetStateAction<WeekDays[]>> }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handelSelect = useCallback((weekDay: WeekDays) => {
        props.setState((prev) => [...prev, weekDay])
        setIsOpen(false)
    }, [])

    return isOpen ? (
        <View className='absolute top-0 left-0 w-screen h-screen'>
            <View className='flex flex-row gap-y-4 flex-wrap justify-between w-full'>
                {weekDays.map((item, index) => (
                    <Pressable onPress={() => handelSelect(item)} className='p-2 w-full bg-white rounded-md flex justify-center items-center text-primary shadow-md' key={index}>
                        <Text>{WeekDays[item]}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    ) : (
        <Button onPress={() => setIsOpen(true)} title='Select WeekDays' />
    );
}


const SelectAmount = (props: { setState: (icon: number) => void, unit: Unit }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handelSelect = useCallback((icons: number) => {
        props.setState(icons)
        setIsOpen(false)
    }, [])

    return isOpen ? (
        <View className='absolute top-0 left-0 w-screen h-screen'>
            <View className='flex flex-row gap-y-4 flex-wrap justify-between w-full'>
                {Unit.Count ? (
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                        placeholder="Enter number..."
                        keyboardType="numeric"
                        onChangeText={(e) => props.setState(Number(e))}
                        value={"1"}
                    />
                ) : (
                    <TimePicker setState={handelSelect} />
                )}
            </View>
        </View>
    ) : props.unit === Unit.Binary ? null : (
        <Button onPress={() => setIsOpen(true)} title='Amount' />
    );
}



const arrayFrom = (min: number, max: number): string[] => {
    const data = [];
    for (let i = min; i <= max; i++) {
        if (i < 10) {
            data.push(`0${i}`);
        } else {
            data.push(i.toString());
        }
    }

    return data;
}



const TimePicker = (props: { setState: (number: number) => void }) => {
    const [selectedHour, setSelectedHour] = useState('00');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedSecond, setSelectedSecond] = useState('00');
    const hours = arrayFrom(0, 24);
    const minutes = arrayFrom(0, 59);
    const seconds = arrayFrom(0, 59);
    const ITEM_HEIGHT = 64;


    return (
        <View className='items-center flex-row flex w-full justify-evenly bg-white py-4 rounded-md shadow-2xl'>
            <SlotMachine items={hours} value={selectedHour} setValue={setSelectedHour} label='hours' height={ITEM_HEIGHT} />
            <SlotMachine items={minutes} value={selectedMinute} setValue={setSelectedMinute} label='minutes' height={ITEM_HEIGHT} />
            <SlotMachine items={seconds} value={selectedSecond} setValue={setSelectedSecond} label='seconds' height={ITEM_HEIGHT} />
        </View>
    );
};



interface SlotMachineProps {
    items: string[];
    height: number;
    label: string;
    setValue: (s: string) => void;
    value: string;
}

const SlotMachine = ({items, height, label, value, setValue}: SlotMachineProps) => {
    const scrollView = useRef<ScrollView>(null);
    const [optionIndex, setOptionIndex] = useState(items.indexOf(value));

    return (
        <View className='justify-center flex items-center'>
            <Text className='text-primary text-lg mb-1'>{label}</Text>
            <ScrollView
                onScroll={e => {
                    let val = 0;
                    if (e.nativeEvent.contentOffset.y > 0) val = Math.round(e.nativeEvent.contentOffset.y / height)
                    setOptionIndex(val);
                    setValue(items[val]);
                }}
                onMomentumScrollEnd={() => {
                    if (scrollView.current) scrollView.current.scrollTo({ y: height * optionIndex, animated: true })
                }}
                showsVerticalScrollIndicator={false}
                ref={scrollView}
                style={{height: height*3}}
                className='px-4 bg-green-300 shadow-lg w-20 border-white border-2 rounded-md'>
                <View style={{height}} />
                {items.map((item, index) => (
                    <View key={index} style={{height}} className="w-full justify-center items-center">
                        <Text className={`text-lg text-gray-900 ${optionIndex === index ? "font-extrabold text-xl" : "opacity-75"}`}>{item}</Text>
                    </View>
                ))}
                <View style={{height}} />
            </ScrollView>
        </View>
    );
};