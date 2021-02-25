import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Header = (props) => {
    const navig = props.data.map(item => <li className={item.class} key={item.link}> <Link activeClassName='is-active' to={item.link}>{item.text}</Link> </li>);
    return (
            <header>
                <nav >
                    <ul className ='nav_ul'>
                        {navig}
                    </ul>
                </nav>
            </header>
    )
}

export default Header
