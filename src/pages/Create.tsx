import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { Button, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
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

    return (
        <View className='flex flex-1 '>
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



const arrayFrom = (min: number, max: number) => {
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
    const hours = arrayFrom(1, 24);
    const minutes = arrayFrom(1, 60);

    const handleHourSelection = (hour: string) => {
        setSelectedHour(hour);
    };

    const handleMinuteSelection = (minute: string) => {
        setSelectedMinute(minute);
    };

    useEffect(() => {
        props.setState((Number(selectedHour) * 60) + Number(selectedMinute))
    }, [selectedHour, selectedMinute])

    const elementPositionsRef = React.useRef<number[]>([]);

    return (
        <View className='flex-1 w-full items-center gap-4 justify-center flex-row'>
            <ScrollView
                contentContainerStyle={{ alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
                className='!h-[180px] max-w-[60px] border-white border-[3px] !p-0 rounded-md flex'
                onScroll={(event) => {
                    // console.log(`\nval: ${event.nativeEvent.contentOffset.y.toFixed(0)},\n calc1: ${event.nativeEvent.contentOffset.y/53},\n calc2: ${event.nativeEvent.contentOffset.y/24}`);
                    const ele = Math.round((event.nativeEvent.contentOffset.y+60)/60)-1;
                    console.log(ele);
                    setSelectedHour(hours[ele])
                }}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {hours.map((hour, index) => (
                    <TouchableOpacity
                        key={hour}
                        onPress={() => handleHourSelection(hour)}
                        className='!h-[40px] !my-[10px] flex justify-center items-center'
                        onLayout={(e) => {
                            let data = {}
                            console.log(`hour: ${hour}, position: ${e.nativeEvent.layout.y}, x: ${e.currentTarget.measure((x, y, w, h, pX, pY) => {
                                data = { x, y, w, h, pX, pY };
                                console.log(data);
                            })}`)

                            elementPositionsRef.current[index] = e.nativeEvent.layout.y;
                        }}
                        style={[
                            { opacity: selectedHour === hour ? 1 : 0.5 },
                        ]}
                    >
                        <Text className={selectedHour === hour ? "text-3xl" : "text-xl"}>{hour}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity className='!h-[120px] flex justify-center items-center'>
                </TouchableOpacity>

            </ScrollView>

            <ScrollView
                contentContainerStyle={{ alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
                className='h-36 max-w-[60px] border-white border-[3px] rounded-md flex'
                showsVerticalScrollIndicator={false}
            >
                {minutes.map((minute, index) => (
                    <TouchableOpacity
                        key={minute}
                        onPress={() => handleMinuteSelection(minute)}
                        style={[
                            { opacity: selectedMinute === minute ? 1 : 0.5 },
                        ]}
                    >
                        <Text className='text-xl'>{minute}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

