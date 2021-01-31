import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>{
        <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
     
    };
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Farmer Protest','Top News')}
            {newsArticle('Microsoft New Office','Top News in Tech')}
            {newsArticle('Solve React errors','ReactJs')}
            {newsArticle('Interview Prep','Hiring')}
            <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>Farmer Protest</h4>
                <p>Top News</p>
            </div>
        </div>
        <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>Microsoft New Office</h4>
                <p>Top News in Tech</p>
            </div>
        </div>
        <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>Solve React errors</h4>
                <p>ReactJs</p>
            </div>
        </div>
       
        </div>
      
    )
}

export default Widgets
