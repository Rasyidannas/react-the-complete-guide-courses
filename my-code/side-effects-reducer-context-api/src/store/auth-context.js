import React from "react";

//This is react context component
const AuthContext = React.createContext({
    isLoggedIn: false
})

export default AuthContext;