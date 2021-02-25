import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from '../containers/Home'
import Tomorrow from '../containers/Tomorrow'
import Upcomming from '../containers/Upcomming'
import AddTask from '../containers/AddTask'
import {statetoLocalStorage} from '../store/TasksSlice'
import {useSelector} from 'react-redux'
import '../App.css';

function App() {

  const state = useSelector(statetoLocalStorage); 
  localStorage.setItem('reduxState', JSON.stringify(state.task)) 

  const siteNav = [
    {'link':'/add_task', 'text': <i className="bi bi-plus-circle-fill"></i>, 'class': 'add_task_plus'},
    {'link':'/', 'text': 'Сегодня'},
    {'link':'/tomorrow', 'text': 'Завтра'},
    {'link':'/upcomming', 'text': 'Предстоящие'}
  ]

  let styles = { 
    add : '', 
    form: '',
    div: 'form-component',
    icon: 'hidden',
    formHidden: ''

}



  return (
    <div className="main">
       <Router>
          <div className='header-par'>
            <Header data={siteNav}/> 
          </div>
          <Switch> 
          <div className="home-par">
          <Route exact path='/add_task' ><AddTask styles={styles} /></Route>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/tomorrow' component={Tomorrow}></Route>
          <Route exact path='/upcomming' component={Upcomming}></Route>
          </div>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
