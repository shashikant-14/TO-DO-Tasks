import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Component/Task";
import TaskList from "./Component/TaskList";

function App() {
  return (
    <div>
      <Task/>
      {/* <TaskList/> */}
    </div>
  );
}


export default App;
