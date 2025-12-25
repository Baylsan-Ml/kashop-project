import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function Cart() {

  const {username}= useContext(UserContext);
  return (
    <div>
      Cart - {username}
    </div>
  )
}
