import React, { createContext, useState } from 'react'

export const AllContext=createContext({})

const ContextProvider = ({children}) => {
    const [User, setUser] = useState(null)

    const provider={User, setUser}
  return (
    <AllContext.Provider value={provider}>{children}</AllContext.Provider>
  )
}

export default ContextProvider