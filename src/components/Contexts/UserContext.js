import React, { createContext } from 'react';
const userContextValue = {
    email: 'Merph406@gmail.com',
    isAdmin: true,
    name: 'Patryk'
}
export const UserContext = createContext(userContextValue)

export const UserProvider = (props) => {

    return <UserContext.Provider value={userContextValue}{...props}>{props.children}</UserContext.Provider>
}


