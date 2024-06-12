import { useState } from "react";
import SlotMachine from "./SlotMachine";
import { View } from "react-native";

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



interface ITimePickerProps { 
    setState: (number: number) => void;
}

const TimePicker = (props: ITimePickerProps) => {
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

export default TimePicker;


