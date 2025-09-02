import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import classes from '../../assets/styles/Button2.module.css'
import {Link} from 'react-router-dom'

const Button2 = () => {
  return (
    <div>
      <Link to= "/contact">
      <button className={classes.btn2}>
        <span className={classes.text} >EXPLORE SERVICES</span>
        <span className={classes.icon}><IoArrowForward /></span>
      </button>
      </Link>
    </div>
  )
}

export default Button2
