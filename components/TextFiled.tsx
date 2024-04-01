import { Dispatch, SetStateAction } from "react"
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TextInputProps, TouchableWithoutFeedback, View } from "react-native"


interface ITextFiledProps extends TextInputProps {
    set: Dispatch<SetStateAction<string>>;
    value: string;
    label: string;
}


const TextFiled = (props: ITextFiledProps) => {
    const { set, value, label, ...rest } = props;

    return (
        <View className="">
            <Text className="">{label}</Text>
            <TextInput
                {...rest}
                className=""
                onChangeText={text => set(text)}
                value={value}
            />
        </View>
    )
}

export default TextFiled