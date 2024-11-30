"use client"

import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext();

export const useToken = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(undefined);

    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }
    })

    return (
        <UserContext.Provider value={{ token: token, setToken: setToken }}>
            {children}
        </UserContext.Provider>
    );
};
