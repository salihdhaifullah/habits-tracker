import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import icons from '../db/icons';
import { FontAwesome6Icon } from '../utils';
import React from 'react';
import Button from '../components/Button';

const SelectIcon = (props: { setState: (icon: FontAwesome6Icon) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null);


    return (
        <>
            <Modal
                animationType="slide"
                visible={isOpen}
                onRequestClose={() => {
                    setIsOpen(false);
                    setActiveIcon(null);
                }}
                className='bg-primary'>

                <View className='p-2 w-full flex-row justify-between items-center'>
                    <Button onPress={() => setIsOpen(false)}>
                        <Text>Cancel</Text>
                    </Button>

                    <Button disabled={activeIcon === null} onPress={() => {
                        props.setState(activeIcon)
                        setIsOpen(false)
                    }}>
                        <Text>Done</Text>
                    </Button>
                </View>

                <ScrollView>
                    <View className='flex flex-row gap-y-4 flex-wrap justify-between py-10 px-2 w-full bg-primary'>
                        {icons.map((item, index) => (
                            <Pressable
                                onPress={() => setActiveIcon(item)}
                                className='p-2 w-20 bg-white rounded-md border-2 flex justify-center items-center'
                                key={index}
                                style={activeIcon !== item ? null : { backgroundColor: "rgb(74, 222, 128)" }}
                            >
                                <FontAwesome6 name={item} size={34} />
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>

            </Modal>

            <Button onPress={() => setIsOpen(true)}>
                <Text>Select Icon</Text>
            </Button>
        </>
    );
}


export default SelectIcon;
