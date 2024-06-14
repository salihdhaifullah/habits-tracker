import { useState } from "react";
import { Pressable, Text } from "react-native";
import { useRouterContext } from "../context/Router";

interface ITapProps {
    link: string;
    text: string;
}

export default function Tap(props: ITapProps) {
    const [isPressed, setIsPressed] = useState(false)
    const router = useRouterContext()

    return (
        <Pressable
            className={"p-2 bg-gray rounded-md transition-all " + (isPressed ? 'bg-white' : (router.value !== props.link ? 'bg-gray' : 'bg-pink'))}
            onPress={() => router.updateValue(props.link)}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <Text className="!text-dark text-base">
                {props.text}
            </Text>
        </Pressable>
    )
}

