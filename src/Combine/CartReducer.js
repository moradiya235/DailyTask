import React, { useReducer } from 'react'


function CartReducer() {

    const initialstate={
        Number: 0,
        name: "",
    } 

    function reduce(state ,action){
        if(action.type  === "INCREMENT"){
        return{...state,Number : state.Number + 1 ,name:"Kishan"}
    }
    else if(action.type  === "DECREMENT"){
        return{...state,Number :state.Number - 1 ,name: ""}
    }
   else {
      return state;
}
}  
    const[state ,dispatch]=useReducer(reduce,initialstate)
          return (
    <div className='container p-5 col-md-4'>
        <h2>Number : {state.Number}</h2>
        <h2>name :{state .name}</h2>
        <button className='btn btn-success' onClick={() => dispatch({type:"INCREMENT"})}> 
        {" "} + {" "} </button>
        <button className='btn btn-danger mx-2' onClick={() =>dispatch({type:"DECREMENT"})}>
        {" "} - {" "}</button>
    </div>
  )
}

export default CartReducer