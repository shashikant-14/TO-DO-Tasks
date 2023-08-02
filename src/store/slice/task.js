import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name : 'task',
    initialState : {
        tasks:[]
    },
    reducers : {
        fetchtasks(state,action){
            state.tasks.push({id:Date.now(), name:action.payload});
        },

        removetask(state,action){
            state.tasks = state.tasks.filter(task=>task.id!==action.payload);
        }
    }
});

export const {fetchtasks, removetask} = taskSlice.actions;

export const gettasks = (data) => dispatch =>{
    dispatch(fetchtasks(data));
}

export default taskSlice.reducer;
