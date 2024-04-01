import { Link, usePathname } from "expo-router";
import { useState } from "react";
import { Pressable, Text } from "react-native";

interface ITapProps {
    link: string;
    text: string;
}

export default function Tap(props: ITapProps) {
    const [isPressed, setIsPressed] = useState(false)
    const path = usePathname()

    return (
        <Link href={props.link} asChild>
            <Pressable
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                className={`p-2 
                ${isPressed ? "bg-slate-400" : "bg-gray-100"} 
                ${path !== props.link ? "" : "bg-pink-400"}
                transition-all rounded-md text-primary text-base`}
            >
                <Text>{props.text}</Text>
            </Pressable>
        </Link>
    )
}

