import { ReactNode } from "react";
import { useRouterContext } from "../context/Router";
import { Pressable, PressableProps, Text, View } from "react-native";


interface ILinkProps extends PressableProps {
    to: string;
    children: ReactNode 
}

const Link = (props: ILinkProps) => {
    const {to, children, onPress, ...pressableProps} = props;

    const router = useRouterContext();
    return (
      <View>
        <Pressable {...pressableProps} onPress={(e) => { 
            router.updateValue(props.to) 
            onPress && onPress(e);
        }}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
            {props.children}
          </Text>
        </Pressable>
      </View>
    );
  }


  export default Link;