import "./App.css";
import {  Container,  } from "@mui/material";
import Header from "./components/Header";
import Pages from "./components/Pages";
import Formsbs from "./components/Forms_bs";
import Formsmui from "./components/Forms_mui";
import Hero from "./components/Hero";
import Card from './components/Cards';
import Middle from "./components/Middle";
import ReadMe from "./components/ReadMe";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="" >
      <Container>
        <Header/>
        <Pages/>
        <Hero/>
        <Middle/>
        
        {/* <Formsbs/>
        <Formsmui/> */}
      </Container>
        {/* <Routes>
         
          <Route
            path="/"
            element={
              <>
               <ReadMe/>
              </>
            }
          />

          
          <Route path="/readme" element={<ReadMe />} />
        </Routes> */}
      
    </div>
  );
}

export default App;
