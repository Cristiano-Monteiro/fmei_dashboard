import { useState } from "react";

import Container from "./components/Container/Container";

import MainNavbar from "./components/MainNavbar/MainNavbar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import MainContent from "./components/MainContent/MainContent";
import InputFileBox from "./components/InputFileBox/InputFileBox";

function App() {
  const [boxAddTable, setBoxAddTable] = useState(false);

  function showInputFileBox(){
    setBoxAddTable(!boxAddTable);
  };

  return (
    <Container>
      <MainNavbar/>
      <MainContent/>
      <MobileNavbar showInputFileBox={showInputFileBox}/>
      {boxAddTable && <InputFileBox/>}
    </Container>
  );
};

export default App;