import { createContext, useState } from "react";


export const UserContext = createContext(
)

export  const UserContextProvider = ({children })=>{
    const [userName,setUserName]= useState("Toto")

return <UserContext.Provider value={{userName,setUserName}}>
    {children}

</UserContext.Provider>

}

export default UserContextProvider;