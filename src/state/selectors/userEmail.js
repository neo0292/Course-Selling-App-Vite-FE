import { atom, selector } from "recoil";
import { userState } from "../atoms/user";

export const userEmailState = selector({
  key : "userEmailState",
  get : ({get})=>{
    const state = get(userState);
    console.log('userEmail Value from selector',state.userEmail);
    return state.userEmail;
    
  }
});