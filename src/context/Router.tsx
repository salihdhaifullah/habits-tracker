import React, { ReactNode, createContext, useContext, useState } from 'react';

interface RouterContextProps {
    value: string;
    updateValue: (newValue: string) => void;
}

const RouterContext = createContext<RouterContextProps>({
    value: '',
    updateValue: () => { }
});

export const useRouterContext = () => useContext(RouterContext);

const RouterContextProvider = ({ children, route }: { children: ReactNode, route: string }) => {
    const [value, setValue] = useState<string>(route);
    const updateValue = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <RouterContext.Provider value={{ value, updateValue }}>
            {children}
        </RouterContext.Provider>
    );
};


export default RouterContextProvider;