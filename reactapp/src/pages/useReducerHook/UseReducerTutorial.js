import { useReducer } from "react"

const reducer=(state,action)=>{
    switch(action.type){
      case "Increment":return {count:state.count+1,showText:state.showText};
      case "toggleText":return {count:state.count,showText:!state.showText};
      default:return state;
    }
}

function UseReducerTutorial() {
  const [state,dispatch] = useReducer(reducer,{count:0,showText:true});

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispatch({type: "Increment"});
        dispatch({type: "toggleText"});
      }}>Toggle states</button>
      
      {state.showText&&(<h2>This is a text!</h2>)}
    </div>
  )
}

export default UseReducerTutorial