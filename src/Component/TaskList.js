import { useDispatch, useSelector } from "react-redux";
import './Task.css'
import {removetask} from "../store/slice/task"

const TaskList = () => {
    const tasks = useSelector(state=>state.task.tasks);
    const dispatch = useDispatch();
    const deletetask = (id) => {
        dispatch(removetask(id));
    }
    return(
        <ul>
            {tasks && tasks.map(task=>(
                <li key={task.id}>{task.name} <button className="deleteButton" onClick={()=>{deletetask(task.id)}}>X</button></li>
            ))}
        </ul>
    );
}

export default TaskList;