import React from 'react'
import classes from '../../assets/styles/ContactCard.module.css'
import { CiLocationOn } from "react-icons/ci";


const ContactCard = ({Icon=CiLocationOn ,heading ="heading" , title1="title1" , title2="title2"}) => {
  return (
    <div className={classes.main}>
        <div className={classes.iconbox}><span><Icon/></span></div>
        <div className={classes.text}>
            <h4>{heading}</h4>
            <p className={classes.title1}>{title1}</p>
            <p className={classes.title2}>{title2}</p>
        </div>

      
    </div>
  )
}

export default ContactCard
