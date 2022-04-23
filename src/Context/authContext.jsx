import {createContext, useContext, useState}  from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // const getToken = localStorage.getItem("login-token");
    // const getLocalStorageUser = localStorage.getItem("user");
    // const [token, setToken] = useState(getToken || "")
    // const [user, setUser] = useState(JSON.parse(getLocalStorageUser) || "")

    const getToken = JSON.toString(localStorage.getItem("login-token"));
    // console.log(getToken)
    const [token, setToken] = useState(getToken?.token)
    const [user, setUser] = useState(getToken?.user)


    const logoutFun = () => {
        setToken("");
        setUser("");
        localStorage.removeItem("login-token");
        // localStorage.removeItem("user");
      };

    return (
        <AuthContext.Provider value={{token, setToken, user, setUser, logoutFun}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}
