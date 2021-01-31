import React from 'react'
import sonylivlogo from './sonylivlogo.JPG'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo__image">
                <img src={sonylivlogo}/>
            </div>

            <div className='middle__items'>
                <p>SHOWS</p>
                <p>AUS V IND</p>
                <p>MOVIES</p>
                <p>SPORTS</p>
                <p>WWE NETWORK</p>
                <p>CHANNELS</p>
                <div className="search">
                    <SearchIcon  fontSize="large"/>
                </div>
            </div>
            
            

        </div>
    )
}

export default Header
