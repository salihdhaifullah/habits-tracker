import { useState } from "react";
import { Button, View } from "react-native"
import TextFiled from "./TextFiled";
import SelectComponent from "./Select";

const CreateHabit = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 gap-4 justify-center items-center flex-col">
            <TextFiled
                label="Email"
                placeholder="Enter your email"
                value={email}
                set={setEmail}
                keyboardType="email-address"
            />
            <TextFiled
                label="Password"
                placeholder="Enter your password"
                set={setPassword}
                value={password}
                secureTextEntry={true}
            />

            <SelectComponent 
              label="Select a fruit"
              options={['Apple', 'Banana', 'Orange', 'Mango']}
              onSelect={(value: string) => console.log('Selected fruit:', value)}
            />
            <Button
                title="Login"
                onPress={() => console.log("loged")}
            />
        </View>
    )
}

export default CreateHabit
