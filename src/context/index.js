import React, {useContext, useEffect, useState, createContext } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {
    return (
        <div>
            
        </div>
    );
};

export default AuthContextProvider;