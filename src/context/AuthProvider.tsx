import React, { createContext, useState } from 'react';

type AppContextInterface = {
    isLoggedIn: boolean;
    setIsLoggedIn:  (isLoggedIn: boolean) => void;
}

export const AuthContext = createContext<AppContextInterface>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
});

const AuthProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;