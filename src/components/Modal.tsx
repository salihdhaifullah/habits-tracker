import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


interface IPageModalProps {
    visible: boolean;
    onClose: () => void;
    title: string;
}

const PageModal = ({ visible, onClose, title }: IPageModalProps) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className='w-full h-full bg-pink'>
                <View className='w-full h-fit flex flex-row justify-between px-4 py-2 bg-white'>
                    <TouchableOpacity onPress={onClose} className='justify-center items-center'>
                        <AntDesign name="close" size={28} color="rgb(153 0 0)"/>
                    </TouchableOpacity>

                    <Text className='text-dark text-xl'>{title}</Text>
                </View>

                <View className='w-full flex-1'>
                </View>
            </View>
        </Modal>
    );
};

export default PageModal;
