import { useState } from "react";
import { Text } from "react-native";
import { useRouterContext } from "../context/Router";
import Link from "./Link";

interface ITapProps {
    link: string;
    text: string;
}

export default function Tap(props: ITapProps) {
    const [isPressed, setIsPressed] = useState(false)
    const router = useRouterContext()

    return (
        <Link
            to={props.link}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            className={`p-2 
                ${isPressed ? "bg-slate-400" : "bg-gray-100"} 
                ${router.value !== props.link ? "" : "bg-pink-400"}
                transition-all rounded-md text-primary text-base`}
        >
            <Text>{props.text}</Text>
        </Link>
    )
}

