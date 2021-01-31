import React from 'react'
import './SideBar.css'
import {Avatar} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import {selectUser } from './features/userSlice';

function SideBar() {
    const user = useSelector(selectUser);
    const recentitem = (topic)=>(
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="SideBar">
            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,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" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2 className="nameperson">{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">2000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views post</p>
                    <p className="sidebar__statnumber">62</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentitem('software engineer')}
                {recentitem('frontend designer')}
                {recentitem('reactjs')}
                {recentitem('programmer')}
            </div>
        </div>
    )
}

export default SideBar
