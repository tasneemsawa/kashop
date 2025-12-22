import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export default function Cart() {
     const {userName,setUserName}= useContext(UserContext)
  return (
    <div>Cart {userName}</div>
  )
}
