import React from 'react'
import classes from '../../assets/styles/PricingCard.module.css'
import { GrCube } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";



// const data = [
//     {
//         title: "sjdhsj",
//         description: "ksjdksj",
//         pricing: 12,
//         Icon: IoIosCheckmarkCircle,
//         applicable : ["akjdk", "sdslkl", "skdjsk"],
//         notApplicable: ["skskdjs ksjkdj", "sjkdsd kksjdksj"]
//     }
// ]

const PricingCard = ({Icon =IoIosCheckmarkCircle,heading="heading",description="description" , pricing="1213", applicable=["sd", "a"], notApplicable=["a","k"]}) => {
  return (
    <div className={classes.main}>
        <div className={classes.TopBox}>
        <div className={classes.iconBox}><span><Icon/></span></div> 
        <h5>{heading}</h5> 
        <p className='text-secondary'>{description}</p> 

        <div className={classes.price}>
            <span className={classes.currency}>$</span>
            <span className={classes.amount}>{pricing}</span>
            <span className={classes.month}>/month</span>
        </div>
        </div>
        <ul className={classes.applicable}>
            {
                applicable.map((a,i) => <li key={i}>
                    <span className='p-2 text-warning'><IoIosCheckmarkCircle/></span>
                    <span>{a}</span>
                    </li>)
            }
            {
                notApplicable.map((a,i) => <li key={i}>
                    <span className='p-2 text-secondary'><IoIosCheckmarkCircle/></span>
                    <span>{a}</span>
                    </li>)
            }
        </ul>
        <button className='btn btn-secondary rounded-pill mb-4 ms-3 me-3 '>choose plan</button>

        

      
    </div>
  )
}

export default PricingCard
