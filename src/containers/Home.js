import React, {useEffect} from 'react'
import {selectTasks,taskSort, changeStatus, changeStatusNotDone,changeStatusCss, deleteTask, changeProgress, sortering } from '../store/TasksSlice'
import {useSelector, useDispatch} from 'react-redux';
import SortingTask from '../components/SortingTask';
import TaskList from '../components/TaskList'
import AddTask from './AddTask'

const Home = (props) => {
    
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)
    const sorteringState = useSelector(taskSort)
    const filter_category = props.category;
    let sortering_category = 'all'
     
    useEffect(()=>{
        dispatch(sortering(sortering_category))
      },[filter_category]) 

    let styles = { 
        add : 'hidden', 
        form: 'form-reuse',
        div: 'form-in-tasks', 
        icon: '',
        formHidden: 'hidden'
    }

    
    function taskStatus (event){
        event.preventDefault();
        let task = event.target.getAttribute('data-key')

        if(event.target.classList.contains('task_done')){ 
           dispatch(changeStatus(task))
           dispatch(changeStatusCss({taskNum:task,taskStyle:'task-done'}))
        }
        else if (event.target.classList.contains('task_not_done')){ 
            dispatch(changeStatusNotDone(task)) 
            dispatch(changeStatusCss({taskNum:task,taskStyle:''}))
        }
        else if(event.target.classList.contains('delete_task')){ 
            dispatch(deleteTask(task))
        }
        else if(event.target.classList.contains('task_progress')){
            dispatch(changeProgress(task))
            dispatch(changeStatusCss({taskNum:task,taskStyle:'task-in-progress'}))
        }
     }
    
    return (
            <div>
                <div className='home-tools'> 
                <SortingTask/>
                <AddTask styles={styles}/>
                </div>
                <div className="task_pas" onClick={taskStatus}>
                <TaskList task={tasks} sort={sorteringState} filter_category={filter_category}/>
                </div>
            </div>
    )
}

export default Home