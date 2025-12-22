import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null)
    const logout = () => {

        localStorage.removeItem("token")
        setToken(null)

    }
    const setAccesToken = (token) => {
        localStorage.setItem("token", token)
        setToken(token)

    }
    return <AuthContext.Provider value={{ token, setToken, logout,setAccesToken }}>
        {children}
    </AuthContext.Provider>

}
export default AuthContextProvider;