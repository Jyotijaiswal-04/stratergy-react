import React from 'react'
import classes from '../../assets/styles/TeamCard.module.css'

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const TeamCard = ({ src ="img", heading ="Heading", title="title",description = "description"}) => {
  return (
    <div className={classes.box}>
        <div >
            <img src={src} alt="img"  className={classes.img1}/>
            
        </div>
        <div className={classes.text}>
            <h5>{heading}</h5>
            <p className={classes.p1}>{title}</p>
            <p> {description}</p>
            <div className={classes.iconBox}>
                <div className={classes.icon}><FaFacebook /></div>
                <div className={classes.icon}><FaSquareXTwitter /></div>
                <div className={classes.icon}><FaLinkedinIn /></div>
                <div className={classes.icon}><CiYoutube  /></div>
                

            </div>
        </div>
      
    </div>
  )
}

export default TeamCard
