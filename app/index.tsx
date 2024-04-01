import { useCallback, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';

export default function Index() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([Math.random(), Math.random(), Math.random(), Math.random(), Math.random()])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setData(prev => [...prev, Math.random(), Math.random(), Math.random(), Math.random(), Math.random()])
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <FlatList
      className='flex-1 bg-black'
      data={data}
      renderItem={({ item }) => <Item data={item} />}
      keyExtractor={item => item.toString()}
      refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}





function Item({ data }: { data: number }) {
  return (
    <View className="mb-2 bg-red-300 px-4 border justify-center items-start w-full h-20">
      <Text className='text-center text-blue-700 border-green-600 border-2 bg-white p-4 rounded-md'>HABITUP {data}</Text>
    </View>
  )
}

