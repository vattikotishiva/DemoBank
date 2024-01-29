
import { combineReducers, createStore } from "redux";

const intialState = {
    balance:1000,
    name: "",
    mobile:null
}
function tranReducer(state=[],action){
    console.log(state)
    if(action.type=="ADD")
    // console.log(action.payload.amount)
    return [...state,{id:action.payload.id,colors:action.payload.colors,amount:action.payload.amount, type:action.payload.type, date:action.payload.date}]
    if(action.type=="MINUS")
    // console.log(action.payload.amount)
    return [...state,{id:action.payload.id,colors:action.payload.colors,amount:action.payload.amount, type:action.payload.type, date:action.payload.date}]
    else return state
}


function accountReducer(state = intialState,action){
    if(action.type=="withdraw")
    return {...state , balance: state.balance - action.payload};
 else if(action.type=="deposit")
    return {...state , balance: state.balance + action.payload}
else if(action.type=="nameUpdate")
    return {...state , name: action.payload}
 else if(action.type=="reset")
    return {intialState}
else return state
}

let combine =combineReducers({
        account : accountReducer,
        tran : tranReducer
})

let store = createStore(combine)



// store.dispatch({type : "withdraw", payload: 100 })
store.dispatch({type : "deposit", payload: 100 })
store.dispatch({type : "nameUpdate" , payload: "ashok" })
store.dispatch({type : "mobileUpdate" , payload: "7660807667" })



export default store