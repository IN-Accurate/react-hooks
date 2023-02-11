import "./App.css";
import UseStateTutorial from "./pages/useStateHook/UseStateTutorial"
import UseReducerTutorial from "./pages/useReducerHook/UseReducerTutorial"

const App=()=> {
  return (
    <div className="App">
      <UseStateTutorial/>
      <hr style={{width : '100%',marginTop: '25px',marginBottom: '25px'}}></hr>
      <UseReducerTutorial/>
      <hr style={{width : '100%',marginTop: '25px',marginBottom: '25px'}}></hr>
    </div>
  );
}

export default App;
