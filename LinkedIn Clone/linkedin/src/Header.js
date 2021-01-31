import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {login,logout, selectUser } from './features/userSlice';
import { useDispatch} from 'react-redux'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {auth} from './firebase'
import {useSelector} from 'react-redux'


function Header() {
    const  dispatch = useDispatch();
  

    const logoutOfApp = ()=>{
          dispatch(logout());
          auth.signOut();

    }
    return (
        <div className="header">
            
            <div className="header__left">
               <img src="data:image/png;base64,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" alt=""/>
               <div className="header__search">
                   <SearchIcon />
                   <input placeholder="Search" type="text"/>
               </div>

            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon}  title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='My Jobs'/>
                <HeaderOptions Icon={NotificationsIcon} title='Notification'/>
                <HeaderOptions  title='Me' avatar="true"
                onClick={logoutOfApp}/>
            </div>

        </div>
    )
}

export default Header
