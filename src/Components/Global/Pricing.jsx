// import React, { useLayoutEffect } from 'react'
import{Container,Row,Col} from "react-bootstrap"
import { GrCube } from "react-icons/gr";
import PricingCard from './PricingCard'
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoXCircle } from "react-icons/go";

// import TextStyle1 from "./Global/TextStyle1"
// import classes from '../../assets/styles/PricingCard.module.css'

const Pricing = () => {
    const data = [
    {
        heading:"Starter",
        description :"For individuals just getting started",
        pricing :"12",
        
        Icon: GrCube,
        applicable : ["Nullam accumsan lorem", "Vestibulum auctor dapibus", "Nulla consequat massa"],
        notApplicable: ["In enim justo rhoncus ut", "Curabitur ullamcorper ultriciesj"]
    },
    {
        heading:"Professional",
        description :"For small teams and growing businesses",
        pricing :"39",
        
        Icon: IoBriefcaseOutline,
        applicable : ["Donec quam felis ultricies", "Nam eget dui etiam rhoncus", "Maecenas tempus tellus","Donec pede justo fringilla"],
        notApplicable: ["Cras dapibus vivamus"]
    },
    {
        heading:"Enterprise",
        description :"For large organizations and corporations",
        pricing :"79",
        
        Icon: FaRegBuilding,
        applicable : ["Etiam sit amet orci eget", "Pellentesque posuere vulputate","Quisque rutrum aenean","Fusce vulputate eleifend","Phasellus viverra nulla"],
        notApplicable:[]
    }
]
  return (
    <div>
        <Container className='py-5' style={{marginTop:80}}>
              {/* <TextStyle1 title="PRICING" description="Check Our Pricing"/> */}
            {/* <PricingCard/> */}
            <Row xs={1} md={2} lg={3} className="g-4 pt-4">
            {data.map((a,i)=><Col key={i}><PricingCard Icon={a.Icon} heading={a.heading} description={a.description} pricing={a.pricing} applicable={a.applicable} notApplicable={a.notApplicable}
                           
                // {...data[0].applicable.map(a => <li ><span className="text-warning pe-2"><IoIosCheckmarkCircle/></span>{a}</li>)}
                // {...data[0].notApplicable.map(a => <li ><span className="text-secondary pe-2"><GoXCircle/></span><span className='text-secondary'>{a}</span></li>)}
                 
            
            /></Col>)}

          </Row>
        </Container>

      
    </div>
  )
}

export default Pricing
