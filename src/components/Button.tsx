import { ReactNode } from "react";
import { Pressable, PressableProps, View } from "react-native";

const Button = ({ children, disabled, ...props }: PressableProps & { children: ReactNode }) => {
    return (
        <View className='justify-center items-center flex'>
            <Pressable disabled={disabled}
                style={disabled ? { backgroundColor: "rgb(218, 218, 218)" } : { backgroundColor: "rgba(74, 222, 128, 0.5)" }}
                className='p-2 rounded-md transition-all'
                {...props}>
                {children}
            </Pressable>
        </View>
    )
}


export default Button;
