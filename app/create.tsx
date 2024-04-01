import { View } from 'react-native';
import CreateHabit from '../components/CreateHabit';

export default function Create() {
  return (
    <View className="flex-1 bg-gray-900 p-2 justify-center items-center">
      <View className='w-80 h-80 bg-primary p-4 rounded-md'>
        <CreateHabit />
      </View>
    </View>
  );
}