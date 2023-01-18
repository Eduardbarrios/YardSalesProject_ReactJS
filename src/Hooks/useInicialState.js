import { useState } from "react";

const inicialState ={
 cart:[],
}
const useInicialState =() => {
 const [state, setState] = useState(inicialState);
 const addToCart =(payload) => {
  setState({
   ...state,
   cart:[...state.cart, payload]
  })
 }
 const removeFromCart = (indexValue)=>{
  setState({
   ...state,
   cart: state.cart.filter((_, index) => index !== indexValue)
  })
 } 
 return {
  state,
  addToCart,
  removeFromCart
 }
}

export default useInicialState