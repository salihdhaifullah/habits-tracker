import { useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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

export default SlotMachine;