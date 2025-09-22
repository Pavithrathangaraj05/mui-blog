import "./App.css";
import {  Container,  } from "@mui/material";
import Header from "./components/Header";
import Pages from "./components/Pages";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
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
