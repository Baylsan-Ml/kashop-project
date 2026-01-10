import React from 'react'
import useAuthStore from './store/authStore'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouter({children}) {
    const token =useAuthStore((state)=>state.token);

    if(!token){
        <Navigate to={"/login"} />
    }
  return children;
}
