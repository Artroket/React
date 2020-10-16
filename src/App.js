import React, { Profiler } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';




const App = (props) => {



  return (
    
    <div className='app-wrapper'>
      <HeaderContainer /> 
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
        <Route path='/users' render={() => <UsersContainer store={props.store}/> }  />  
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/login' component={Login}/>
      </div>
    </div>

  );
}

export default App;
