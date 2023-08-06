import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettasks, recallTasks } from "../store/slice/task";

const Task = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const tasks = useSelector(state=>state.task.tasks);
    const handleAddtask = () =>{
        inputRef.current.value && dispatch(gettasks(inputRef.current.value));
        console.log(inputRef.current.value)
        inputRef.current.value = '';
    }
    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        if (e.keyCode >= 49 && e.keyCode <= 90) {
            inputRef.current && inputRef.current.focus();
        } else if(e.keyCode == 13){
            handleAddtask();
        }
    }
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('TASKS'));
        tasks?.length >= 1 && dispatch(recallTasks(tasks));

        document.addEventListener('keydown', handleKeyDown);

        return () => { document.removeEventListener('keydown', handleKeyDown); }
    }, []);

    useEffect(() => {
        localStorage.setItem('TASKS', JSON.stringify(tasks))
    }, [tasks]);

    return(
        <div>
            <h1>To DO List</h1>
            <input id="input" type="text" ref={inputRef}></input><button onClick={handleAddtask}>Add Task</button>
        </div>
    );
    }

export default Task;