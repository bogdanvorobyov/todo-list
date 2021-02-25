import {createSlice} from '@reduxjs/toolkit'

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : []

export const TaskSlice = createSlice({
    name: 'tasks',
    initialState: {
        sortering: "", 
        task: persistedState,
     }, 
    reducers : { 
        add : (state, data)=>{ 
            state.task = [...state.task,data.payload]
        },
        changeStatus: (state, data)=>{ 
            state.task[data.payload].status = 'Выполнено';   
        },
        changeStatusNotDone: (state, data)=>{ 
            state.task[data.payload].status = 'Нужно выполнить';   
        },
        changeStatusCss: (state,data) => { 
            state.task[data.payload.taskNum].styles = data.payload.taskStyle
        }, 
        changeStatusOverflow: (state,data) => { 
            let way = data.payload.property
            state.task[data.payload.taskNum][way] = data.payload.taskStyle

        },
        deleteTask:(state,data)=> { 
            delete state.task[data.payload]
        }, 
        changeProgress:(state,data)=>{
            state.task[data.payload].status = 'В процессе';   
        },
        sortering: (state,data)=> { 
            switch (data.payload) {
                case 'not-done': state.sortering = 'Нужно выполнить';
                break;
                case 'done': state.sortering = 'Выполнено';
                break;
                case 'in-progress': state.sortering = 'В процессе';
                break;
                case 'all': state.sortering = '';
                break;
            }
        }
    }
})

export const {add, changeStatus, changeStatusNotDone,changeStatusCss,deleteTask,changeProgress,sortering,changeStatusOverflow} = TaskSlice.actions
export const selectTasks = state => state.tasks.task;
export const taskSort = state => state.tasks.sortering;
export const statetoLocalStorage = state=> state.tasks
export default TaskSlice.reducer; 