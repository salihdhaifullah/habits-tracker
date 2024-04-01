import Tap from "../Tap";
import { View } from 'react-native';

export default function Footer() {
    return (
        <View className='flex-row justify-between items-center bg-green-200 w-full px-4 py-2'>
            <Tap link='/' text='home' />
            <Tap link='/create' text='create' />
            <Tap link='/settings' text='settings' />
        </View>
    )
}
