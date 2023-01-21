import { useState } from "react";

import Container from "./components/Container/Container";

import MainNavbar from "./components/MainNavbar/MainNavbar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import MainContent from "./components/MainContent/MainContent";
import ModalBox from "./components/ModalBox/ModalBox";


function App() {
  const [boxAddTable, setBoxAddTable] = useState(false);

  function showModal(){
    setBoxAddTable(true);
  };

  return (
    <Container>
      <MainNavbar/>
      <MainContent/>
      <MobileNavbar showModal={showModal}/>
      {boxAddTable && <ModalBox/>}
    </Container>
  );
};

export default App;