import React, {useState, useRef} from 'react'
import {selectTasks} from '../store/TasksSlice'
import {useSelector, useDispatch} from 'react-redux';
import {add} from '../store/TasksSlice';


const AddTask = (props) => {
  const [styles,setStyles] = useState(props)
  const [formStyle, setFormStyle] = useState(props.styles.formHidden)
  const [errorStyleInput, setErrorStyleInput] = useState('hidden')
  const [errorStyleText, setErrorStyleText] = useState('hidden')
  const task_slice = useSelector(selectTasks)
  const dispatch = useDispatch()
  const form_name = useRef()
  const form_text = useRef()

  const date = new Date()
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); 
  let yyyy = date.getFullYear();
  let today = mm + '/' + dd + '/' + yyyy;


  const formHendler = (event) => {
    event.preventDefault()
    if (form_name.current.value ===''&& form_text.current.value==='' ){
        form_name.current.classList.add('input-border')
        form_text.current.classList.add('input-border')
        setErrorStyleInput('')
        setErrorStyleText('')
        return false
        
    }
    else if (form_name.current.value ===''|| form_text.current.value==='' ){ 
        if (form_name.current.value ===''){ 
            form_name.current.classList.add('input-border')
            setErrorStyleInput('')
            return false
        }
        else{ 
            form_text.current.classList.add('input-border')
            setErrorStyleText('')
            return false
        }
    }
    else{
        form_name.current.classList.remove('input-border')
        form_text.current.classList.remove('input-border')
        setErrorStyleText('hidden')
        setErrorStyleInput('hidden')
        let id_task = task_slice.length; 
        let task = { 
            id: id_task,
            name : event.target.name.value, 
            category : event.target.date_task.value, 
            text : event.target.task_decsr.value,
            status: 'Нужно выполнить',
            styleOver: 'task-more-overflow',
            date:today,
            hidden_info: 'hidden'
        }
        dispatch(add(task))
        event.target.name.value=''
        event.target.task_decsr.value=''
    }
}


    const showForm =()=>{ 
        if(formStyle === 'hidden'){
            setFormStyle('')
        }
        else { 
            setFormStyle('hidden')
        }
    }
    

    return (
        
        <div className='add-new'>
           <h2 className={styles.styles.add}>Добавить новое задание </h2>
           <div className='icon-plus-circle'><i onClick={showForm} className={styles.styles.icon + ' bi bi-plus-circle-fill'}></i></div>
           <form action="submit" onSubmit = {formHendler} className={formStyle +' '+styles.styles.form+" form-add-task"} noValidate>
               <div className="selecting">
                 <input type='text' name='name' className ={styles.styles.div + ' form-control'} placeholder='Название' ref={form_name}/>
                <div className={errorStyleInput}>Введите название задачи</div>
               </div>
               <div className="selecting">
                <select name="date_task" id="date_task" className = {styles.styles.div + ' form-control'}>
                        <option value="today">Сегодня</option>
                        <option value="tomorrow">Завтра</option>
                        <option value="upcomming">Предстоящие</option>
                </select>
               </div>
               <div className="selecting">
                    <textarea className ={styles.styles.div + ' form-control'} name="task_decsr" id="task_decs" cols="30" rows="10" placeholder='Описание задачи' ref={form_text}></textarea>
                    <div className={errorStyleText}>Введите описание задачи</div>
               </div>
               <div><button className="btn btn-primary mb-3" type='sumbit' >Добавить</button></div>
           </form>
           
        </div>
    )
}

export default AddTask