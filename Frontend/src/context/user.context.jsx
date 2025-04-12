import axios from 'axios';
import React, { createContext, useState, useContext  } from 'react';
import { useEffect } from 'react';

// Create the UserContext
export const UserContext = createContext();


// Create a provider component
export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    useEffect(()=>{
        
        
        console.log("cp",user);
    },[])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};