import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Component/Task";
import TaskList from "./Component/TaskList";

function App() {
  document.addEventListener('keydown',(e)=>{
    console.log(e.keyCode);
    if(e.keyCode >= 49 && e.keyCode <= 90){
      document.getElementById('input').focus();
    }
  });
  return (
    <div>
      <Task/>
      <TaskList/>
    </div>
  );
}


export default App;
