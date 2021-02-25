import React from 'react'
import MoreInfo from '../containers/MoreInfo'


const TaskList = (props) => {
    const res = props.task.filter(item => {
        return item!== undefined && item!== null
     })
    const res_category_filter =  res.filter(item=>{
        return item.category === props.filter_category
    })
    const res_sortering = res_category_filter.reverse().filter(item=>{
        if (props.sort === ''){ 
            return true
        }
        else return item.status === props.sort 
    })

    return (
        <div>
            {res_sortering.map(item=> 
                <div className={item.styles+' task-view'} key={item.id}>
                    <MoreInfo item={item}/>
                    <div className ={item.styleOver + ' task-name'} key={item.name+ new Date().toDateString}>Название: {item.name}
                    <br/>   
                    <div className={item.hidden_info+' date-create'}>Дата создания:{item.date}</div>
                    </div>
                    <div className = {item.styleOver + ' task-text'} key={item.text}>{item.text}</div>
                    
                    <div>Статус: {item.status}</div>
                    <div className="status-bar">
                        <div data-key={item.id} className='icon-task task_done'><i data-key={item.id} className="bi bi-check-circle task_done"></i></div>
                        <div data-key={item.id} className='icon-task task_progress'><i data-key={item.id} className="bi bi-lightning task_progress"></i></div>
                        <div data-key={item.id} className='icon-task task_not_done'><i data-key={item.id} className="bi bi-arrow-clockwise task_not_done"></i></div>
                        <div data-key={item.id} className='icon-task delete_task'><i  data-key={item.id} className="bi bi-trash delete_task"></i></div>
                    </div>
                </div>
        )}
        </div>
    )
}


export default TaskList