import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { gettasks } from "../store/slice/task";

const Task = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const handleAddtask = () =>{
        inputRef.current.value && dispatch(gettasks(inputRef.current.value));
        console.log(inputRef.current.value)
        inputRef.current.value = '';
    }
    return(
        <div>
            <h1>To DO List</h1>
            <input type="text" ref={inputRef}></input><button onClick={handleAddtask}>Add Task</button>
        </div>
    );
}

export default Task;