import {create} from "zustand";

export const useCounterStore= create((set)=>({
    counter:0,
    userName: 'Tasneemo',
    increase:(n)=>set((state) =>({
        counter:state.counter+n
    })),
    descrease:(n)=>set((state) =>({
        counter:state.counter-n
    }))
}));