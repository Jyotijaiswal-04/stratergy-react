import React from 'react'
import classes from '../../assets/styles/StepsCard.module.css'
import { FaLightbulb, FaCog, FaChartBar } from 'react-icons/fa';

const StepsCard = ({Icon =FaLightbulb , title="title",heading="Heading" , description="description", side = "left"}) => {
  return (
    <div className={`${classes.box} ${side =="left"? classes.left: ""}`}>
        <div className={classes.iconBox}>
            <div className={classes.icon}><Icon/></div>
        </div>
        <div className={classes.text}>
            <p className={classes.stepText}>{title}</p>
            <h5>{heading}</h5>
            <p className={classes.p1}>{description}</p>
        </div>

    </div>
  )
}

export default StepsCard
