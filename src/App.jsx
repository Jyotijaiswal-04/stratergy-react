import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Global/Header";
import Button1 from "./Components/Global/Button1";
import Introduction from "./Components/Introduction";
import Button2 from "./Components/Global/Button2";
import AboutUs from "./Components/AboutUs";
import TextStyle1 from "./Components/Global/TextStyle1";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Cards1 from "./Components/Global/Cards1";
import Team from "./Components/Global/Team";
import Steps from "./Components/Global/Steps";
// import Cta from './Components/Global/CTA';
import Pricing from "./Components/Global/Pricing";
import CurvedArrow from "./Components/Global/CurvedArrow";
import Faq from "./Components/Global/Faq";
import Contact from "./Components/Global/Contact";
import NotFound from "./Components/Global/NotFound";
import Footer from "./Components/Global/Footer";
import ContactForm from "./Components/Global/ContactForm";
// import PortfolioComponent,{siteName as site,firstName} from'./component'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Introduction />}></Route>
        <Route path="/home" element={<Introduction />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element={<Team />}></Route>
        {/* <Route path='/pricing' element={ <Pricing/>}></Route> */}

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />

      {/* <Introduction/> */}
      {/* <Button2/> */}

      {/* <TextStyle1/> */}
      {/* <AboutUs/>
      <Services/>
      <Steps/>
      <Cta/> */}
      {/* <Portfolio/> */}
      {/* <Cards1/> */}
      {/* <Team/>
      <Pricing/> */}
      {/* <Faq/> */}
      {/* <CurvedArrow/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
