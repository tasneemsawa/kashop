import {create} from "zustand";

export const useAuthStore= create((set)=>({
    token:localStorage.getItem("token"),
    userName: 'Tasneemo',
    setToken:(token)=>{
        localStorage.setItem("token",token)
        set({ token})

},
    logout:()=>{
        set({ token:null})
        localStorage.removeItem("token")
    }
    
    
}));