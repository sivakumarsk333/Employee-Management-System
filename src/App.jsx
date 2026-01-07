
import Employmentsk from "./Component-1/Employmentsk";
import HeadComponent from "./Component-1/HeadComponent";
import ListEmployeeComponent from "./Component-1/ListEmployeeComponent";
import Footer from "./Component/Footer";
import FooterComponent from "./Component/FooterComponent";
import Header from "./Component/Header";

import Course from "./Course";
import Navbar from "./Navbar"
import s1 from './assets/solo1.png'
import s2 from './assets/solo2.jpg'
import s3 from './assets/solo3.jpg'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (

    <>
  
    {/* <Course name="IGRIS" image={s1} />
    <Course name="IGRIS" image={s2} />
    <Course name="IGRIS" image={s3}/> */}
    
    
    {/* <Header/>
    <ListEmployee/>
    <Footer/> */}
    <BrowserRouter>


    <HeadComponent/>
    <Routes>
      // http://localhost:5134
      <Route  path="/" element={<ListEmployeeComponent/>}></Route>

      // http://localhost:5134/employees
      <Route path="/employees" element= {<ListEmployeeComponent/>} ></Route>

      // http://localhost:5134/add-employee
      <Route path="/add-employee" element={<Employmentsk/>}></Route>

      <Route path="/update-employee/:id" element={<Employmentsk/>}></Route>
      </Routes> 
    {/* <FooterComponent/> */}
    
    </BrowserRouter>
    </>
  );
}

export default App