import { create } from "zustand";


const decodedUser = JSON.parse(localStorage.getItem("user"));

const useAuthStore= create((set)=>({

  token:localStorage.getItem("token"),
  user:decodedUser,

   
  setToken:(token)=>{
    localStorage.setItem("token", token),
    set({token})
  },

  setUser:(user)=>{
    localStorage.setItem("user",JSON.stringify(user) ),
    set({user})
  },

  logout:()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({token:null, user:null})
  }
}));

export default useAuthStore;