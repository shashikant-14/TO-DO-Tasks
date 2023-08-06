import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name : 'task',
    initialState : {
        tasks:[]
    },
    reducers : {
        fetchtasks(state,action){
            state.tasks.push({id:Date.now(), name:action.payload, status:'Pending'});
        },

        removetask(state,action){
            state.tasks = state.tasks.filter(task=>task.id!==action.payload);
        },

        recallTasks(state,action){
            state.tasks = action.payload;
        },

        updateTask(state,action){
            state.tasks.forEach(task => {
                if(task.id == action.payload) {
                    task.status = 'Completed'
                }

            });
        }
    }
});

export const {fetchtasks, removetask, recallTasks, updateTask} = taskSlice.actions;

export const gettasks = (data) => dispatch =>{
    dispatch(fetchtasks(data));
}

export default taskSlice.reducer;
