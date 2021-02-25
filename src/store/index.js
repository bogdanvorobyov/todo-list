import {configureStore} from '@reduxjs/toolkit'

import TaskReduser from './TasksSlice'

export default configureStore( { 
    reducer: { 
        tasks: TaskReduser,
    }
})