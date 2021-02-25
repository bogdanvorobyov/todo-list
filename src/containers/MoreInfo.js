import React from 'react'
import { useDispatch } from 'react-redux'
import {changeStatusOverflow} from '../store/TasksSlice'

const MoreInfo = (props) => {
    const dispatch =useDispatch()

    const moreInfo =(event)=>{ 
        event.preventDefault()
       
        let tasks = event.target.getAttribute('data-key')
        
        if (props.props.task[tasks].styleOver === 'task-more-overflow'){ 
            dispatch(changeStatusOverflow({taskNum:tasks,taskStyle:'bi-chevron-up',property:'icon'}))
            dispatch(changeStatusOverflow({taskNum:tasks,taskStyle:'',property:'styleOver'}))
            dispatch(changeStatusOverflow({taskNum:tasks,taskStyle:'',property:'hidden_info'}))

        }
        else{
            dispatch(changeStatusOverflow({taskNum:tasks,taskStyle:'',property:'icon'}))
            dispatch(changeStatusOverflow({taskNum:tasks,taskStyle:'hidden',property:'hidden_info'}))
            dispatch(changeStatusOverflow({taskNum:tasks,taskStyle:'task-more-overflow',property:'styleOver'}))
        }
    }
    return (
        <div>
            <i data-key={props.item.id} onClick={moreInfo} className={props.item.icon+" bi bi-chevron-down"}></i>   
        </div>
    )
}

export default MoreInfo