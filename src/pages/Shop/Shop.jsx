import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export default function Shop() {
     const {userName,setUserName}= useContext(UserContext)
  return (
    <div>Shop {userName}</div>
  )
}
