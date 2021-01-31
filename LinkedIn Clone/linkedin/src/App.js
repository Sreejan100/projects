import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'

import Header from './Header';
import './App.css';
import Sidebar from './SideBar'
import Feed from './Feed'
import Login from './Login'
import {login,logout, selectUser } from './features/userSlice';
import {auth} from './firebase'
import Widgets from './Widgets'

function App() {

  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
     auth.onAuthStateChanged(userAuth =>{
       if(userAuth){
          dispatch(login({
            email:userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          }));
       }else{
          dispatch(logout());
       }
     })
  }, [])
  return (
    <div className="app">
     
     <Header />

     {!user ? (<Login />):(
          <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
     )}
  
      

    </div>
  );
}

export default App;
