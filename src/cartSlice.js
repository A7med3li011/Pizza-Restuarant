import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

const initialState = {
    cart:[]
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart(state,action){
            state.cart.push(action.payload)
            // const item  = state.cart.find(item=>item.id === action.payload.id).incart = true
            // console.log(action.payload)
            toast.success("added successfully")
        },
        deleteCart(state,action){
           state.cart =  state.cart.filter(item=>item.pizzaId !== action.payload)
           toast.success("deleted successfully")
        },
        incItem(state,action){
            if(state.cart.includes(state.cart.find(item=>item.pizzaId === action.payload))){

                const item = state.cart.find(item=>item.pizzaId === action.payload)
                item.quantity ++
                item.totalPrice = item.unitPrice * item.quantity
                toast.success("increased successfully")
            }
        },
        decItem(state,action){
            if(state.cart.includes(state.cart.find(item=>item.pizzaId === action.payload))&& state.cart.find(item=>item.pizzaId === action.payload).quantity > 1){

                const item = state.cart.find(item=>item.pizzaId === action.payload)
                item.quantity --
                item.totalPrice = item.unitPrice * item.quantity
                toast.success("decreased successfully")
            }
        },

        clearCart(state){
            state.cart = []
            toast.success("cleared successfully")
        }
         
    }


})
export const {addtoCart,deleteCart,incItem,decItem,clearCart }  = cartSlice.actions

export default cartSlice.reducer

export const getCurrentQuantitubyId = id => state =>state.cart.cart.find(item=>item.pizzaId===id)?.quantity ?? 0 