import React from 'react'

import{Container,Row,Col} from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
// import classes from '../../assets/styles/Faq.module.css'
import CurvedArrow from './CurvedArrow';
import  { useState } from "react";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
];


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div>
        <Container className='py-5' style={{marginTop:80}}>
            <Row>
                <Col xs={12} lg={5}>
                <div>
                    <h1>Have a question? Check out the FAQ</h1>
                    <p className='pt-1 '>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                    <div>
                        <CurvedArrow/>
                    </div>

                </div>
                </Col>
                <Col xs={12} lg={7}>
                <div>
                 <div className=" text-white ">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`mb-3 p-3 rounded ${
            index === activeIndex ? "bg-dark" : "bg-dark "
          }`}
        >
          <div
            className={`d-flex justify-content-between align-items-center ${
              index === activeIndex ? "text-warning fw-semibold" : ""
            }`}
            role="button"
            onClick={() => toggleAccordion(index)}
          >
             <span>{faq.question}</span>
            <span>{index === activeIndex ? "▾" : "▸"}</span>
          </div>
          {index === activeIndex && faq.answer && (
            <div className="mt-2 text-white-50">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
                </div>
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default Faq
