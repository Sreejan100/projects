import React from 'react'
import Button from './Button'
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import './Item.css'

const Item = ({title,desc,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first}) => {
    return (
        <div className="item" style={{ 

            backgroundImage: `url(${backgroundImg})`



        }}>
             <div className="item__container">
                 <div className="item__text">
                     <p>{title}</p>
                     <div className="item__desc">
                         <p>{desc}</p>
                     </div>
                 </div>

                 <div className="item__lowerthird">
                     <div className="item__buttons">
                         <Button imp='primary' text={leftBtnTxt} link = {leftBtnLink}/>
                         {twoButtons && (
                             <Button imp='secondary' text={rightBtnTxt} link = {rightBtnLink}/>
                         )}
                         {first && (
                             <div className="item_expand">
                                 <ExpandMoreSharpIcon/>
                             </div>
                         )}
                     </div>
                 </div>
             </div>
            
        </div>
    )
}

export default Item
