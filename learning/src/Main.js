import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import './Main.css';
import Home from './Home';
import TicTac from './TicTac';
import Test2 from './Test2';
import Messenger from './Messenger';


class Main extends Component {
    render() {
        return(
            <HashRouter>
            <div>
                <ul className='header'>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/TicTac'>Tic Tac Toe</NavLink></li>
                    <li><NavLink to='/Test2'>Dad Jokes</NavLink></li>
                    <li><NavLink to='/Messenger'>Messenger</NavLink></li>
                </ul>
                <div className='content'>
                    <Route exact path='/' component={Home}/>
                    <Route path='/TicTac' component={TicTac}/>
                    <Route path='/Test2' component={Test2}/>
                    <Route path='/Messenger' component={Messenger}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;