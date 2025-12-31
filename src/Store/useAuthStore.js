import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const decodeToken = () => {
    let token = localStorage.getItem("token")
    if (token) {
        let decode = jwtDecode(token)
        let user = {
            name: decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            role: decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        }
        return user
    }
    else return null

}


export const useAuthStore = create((set) => ({
    token: localStorage.getItem("token"),
    user: decodeToken(),
    setToken: (token) => {
        localStorage.setItem("token", token)
        set({ token })

    },
    setUser: (user) => {
        set({ user })
    }
    ,
    logout: () => {
        set({ token: null, user: null })
        localStorage.removeItem("token")
    }


}));