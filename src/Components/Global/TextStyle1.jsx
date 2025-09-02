import React from 'react'
import classes from "../../assets/styles/TextStyle1.module.css"

const TextStyle1 = (Props) => {
    
        const {title ="title",description="description"}=Props;
        return (
    <div className={classes.main}>
      <h6 className={classes.sp1}>{title}</h6>
      <h4 className={classes.h4}>{description}</h4>
    </div>
  )

    }
  


export default TextStyle1
