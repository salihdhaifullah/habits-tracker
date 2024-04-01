import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback, useEffect, useState } from 'react';
import { useFonts } from "expo-font"
import { RefreshControl, ScrollView, ToastAndroid, View } from 'react-native';
import Footer from '../components/layout/Footer';
export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });


    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    ToastAndroid.showWithGravity(
        "Welcome!', 'This is your first open today",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
    );

    return <RootLayoutNav />;
}


function RootLayoutNav() {
    return (
        <View className='flex-1'>
            <Stack screenOptions={{ animation: "fade", headerShown: true }}>
                <Stack.Screen name="index" options={{ presentation: "modal" }} />
                <Stack.Screen name="create" options={{ presentation: "modal" }} />
                <Stack.Screen name="settings" options={{ presentation: "modal" }} />
            </Stack>
            <Footer />
        </View>
    );
}
