import React, { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLogIn] = useState(false);

    const authContextValue = {
        setLogIn,
        loggedIn,
    };
    return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };