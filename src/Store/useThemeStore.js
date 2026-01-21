import { create } from "zustand";

const useThemeStore = create((set)=>({
    mode:localStorage.getItem('theme') || 'light',
    
    toggleTheme: ()=>{set((state)=>{
            const newMode = state.mode === 'light'?'dark' : 'light'
            localStorage.setItem('theme', newMode);
            set({ mode:newMode })
            return {mode:newMode}
        })
    }
}))

export default useThemeStore;