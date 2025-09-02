import React from 'react'
import TextStyle1 from './TextStyle1'
import StepsCard from './StepsCard'
import { FaLightbulb  } from 'react-icons/fa';
import { GoGear } from "react-icons/go";
import { BsBarChart } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { Container ,Row,Col} from 'react-bootstrap';

const Steps = () => {
    const data =[
        {
        title: " STEPS 01",
          heading:"Initial Consultation",
          description: "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
          Icon:FaLightbulb
        },
        {
        title: " STEPS 02",
          heading:"Planning & Strategy",
          description: "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
          Icon:GoGear 
        },
        {
        title: " STEPS 03",
          heading:"Development Phase",
          description: "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
          Icon:BsBarChart
        },
        {
        title: " STEPS 04",
          heading:"Launch & Support",
          description: "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
          Icon:FiCheckCircle
        },
        
    ]
    
  return (
    <div>
      <Container className='py-5' style={{marginTop:80}}>
        <TextStyle1 title="STEPS" description="HOW WE WORK"/>
        {/* <StepsCard/> */}

        <Row xs={1} md={1} lg={1} className="g-4 pt-4">
            {data.map((a,i)=><Col key={i}><StepsCard  title={a.title} heading={a.heading}  description={a.description} Icon ={a.Icon} side={i%2 == 1? "left": ""}/></Col>)}

          </Row>

      </Container>
    </div>
  )
}

export default Steps
