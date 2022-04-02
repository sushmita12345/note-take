import {createContext, useContext, useState}  from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const getToken = localStorage.getItem("login-token");
    const getLocalStorageUser = localStorage.getItem("user");
    const [token, setToken] = useState(getToken || "")
    const [user, setUser] = useState(JSON.parse(getLocalStorageUser) || "")

    const logoutFun = () => {
        setToken("");
        setUser("");
        localStorage.removeItem("login-token");
        localStorage.removeItem("user");
      };

    return (
        <AuthContext.Provider value={{token, setToken, user, setUser, logoutFun}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}
