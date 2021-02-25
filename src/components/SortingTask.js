import React, {useRef, useState} from 'react'
import {selectTasks, sortering } from '../store/TasksSlice'
import {useDispatch} from 'react-redux';


const SortingTask = () => {
    
    const dispatch = useDispatch()
    const [styles, setStyles] = useState('hidden')
    const selectTask = useRef()
   
    const sortingHandler = (event) =>{ 
        let filter = event.target.value
        dispatch(sortering(filter))
    }
    
    const showFilter = (event) =>{ 
        selectTask.current.classList.contains('hidden') ?  setStyles(''):setStyles('hidden');
    }

    return (
        <div>
            <div className='status-par'>
                <i className="bi bi-filter" onClick={showFilter}></i>
                <select className={styles + ' form-select status-select'} ref={selectTask} name="status" id="status" defaultValue='all' onChange={sortingHandler} >
                    <option value='all'>Все задачи</option>
                    <option value='not-done'>Не выполненные</option>
                    <option value='done'>Выполненные</option>
                    <option value='in-progress'>В процессе</option>
                </select>
            </div>
        </div>
    )
}

export default SortingTask