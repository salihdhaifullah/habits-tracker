import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import Constants from 'expo-constants'

export default function Index() {
  return (
    <View className="flex-1 bg-red-300 p-2 justify-center items-center" style={{marginTop: Constants.statusBarHeight}}>
      <Text className='text-6xl text-center text-blue-700 border-green-600 border-2 bg-white p-4 rounded-md'>Create</Text>
      <StatusBar style="auto" />
    </View>
  );
}