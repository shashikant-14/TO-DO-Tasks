import { useDispatch, useSelector } from "react-redux";
import './Task.css'
import {removetask,updateTask} from "../store/slice/task"
import { useEffect, useState } from "react";

const TaskList = () => {
    const tasksData = useSelector(state=>state.task.tasks);
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let completedTask = [];
        let pendingTask = [];
        tasksData.length >= 1 && tasksData.forEach(task => {
            if(task.status === 'Completed'){
                completedTask.push(task);
            } else {
                pendingTask.push(task);
            }
        });
        setTasks([...pendingTask,...completedTask]);
    },[tasksData]);

    const deletetask = (id) => {
        dispatch(removetask(id));
    }

    const completedTask = (id) => {
        dispatch(updateTask(id));
    }
    return(
        <ul>
            {tasks && tasks.map(task=>{
                return task.status!== 'Completed' ?
                 (
                        <li key={task.id}>
                            <span className="tasklist">{task.name}</span>
                            <div>
                            <button className="completeButton" onClick={() => { completedTask(task.id) }}>C</button>
                            <button className="deleteButton" onClick={() => { deletetask(task.id) }}>X</button>
                            </div>
                        </li>
                    ) :
                (<li className="completedTask" key={task.id}>
                    <span className="tasklist" style={{marginRight:'25px'}}>{task.name}</span> 
                    <button className="deleteButton" onClick={() => { deletetask(task.id) }}>X</button>
                </li>)
            })}
        </ul>
    );
}

export default TaskList;