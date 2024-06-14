import Tap from "../Tap";
import { View } from 'react-native';

export default function Footer() {
    return (
        <View className='flex-row justify-between items-center bg-pink w-full p-4 rounded-t-2xl'>
            <Tap link='/' text='home' />
            <Tap link='/habit' text='habit' />
            <Tap link='/create' text='create' />
        </View>
    )
}
