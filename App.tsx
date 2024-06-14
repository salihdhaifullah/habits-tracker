import { useEffect } from 'react';
import { ToastAndroid, View } from 'react-native';
import RouterContextProvider from './src/context/Router';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import constants from 'expo-constants';

import Route from './src/components/Route';
import Habit from './src/pages/Habit';
import Create from './src/pages/Create';
import Index from './src/pages/Index';
import Footer from './src/components/layout/Footer';

// import { NativeWindStyleSheet } from "nativewind";
//
// NativeWindStyleSheet.setOutput({ default: "native" });

export default function App() {
  const [loaded, error] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });


  useEffect(() => { if (error) console.log(error) }, [error]);

  if (!loaded) {
    return null;
  }


  return (
    <View className='flex-1 bg-primary' style={{marginTop: constants.statusBarHeight}}>
      <RouterContextProvider route='/'>
        <View className='flex-1 p-2'>
          <Route route='/'><Index /></Route>
          <Route route='/create'><Create /></Route>
          <Route route='/habit'><Habit /></Route>
        </View>
        <Footer />
      </RouterContextProvider>
    </View>
  );
}

