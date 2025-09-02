import React from 'react'
import{Container,Row,Col} from "react-bootstrap"
import { FaPalette } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from '../../assets/styles/Cards1.module.css'
import { IoDiamondOutline } from "react-icons/io5";
const Cards1 = ({heading = "Heading" , description ="description", Icon=IoDiamondOutline}) => {
  return (
    <div className={classes.box}>
      <div className={classes.iconBox}>
      <Icon/>
      </div>
      <h3>{heading}</h3>
      <p>{description}</p>

    
      
    </div>

  )
}

export default Cards1
