import { useState } from "react";

import Container from "./components/Container/Container";

import OpeningScreen from "./components/OpeningScreen/OpeningScreen";

import MainNavbar from "./components/MainNavbar/MainNavbar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import MainContent from "./components/MainContent/MainContent";
import InputFileBox from "./components/InputFileBox/InputFileBox";
import CalendarBox from "./components/CalendarBox/CalendarBox";

function App() {
  const [boxAddTable, setBoxAddTable] = useState(false);
  const [calendarBox, setCalendarBox] = useState(false);

  function showInputFileBox(){
    setBoxAddTable(!boxAddTable);
    setCalendarBox(false);
  };

  function showCalendarBox(){
    setCalendarBox(!calendarBox);
    setBoxAddTable(false);
  };

  function backToHome(){
    setBoxAddTable(false);
    setCalendarBox(false);
  };

  return (
    <Container>
      <OpeningScreen/>
      <MainNavbar
        showInputFileBox={showInputFileBox}
        showCalendarBox={showCalendarBox}
        backToHome={backToHome}
      />
      <MainContent/>
      <MobileNavbar 
        showInputFileBox={showInputFileBox}
        showCalendarBox={showCalendarBox}
        backToHome={backToHome}
      />
      {boxAddTable && <InputFileBox/>}
      {calendarBox && <CalendarBox/>}
    </Container>
  );
};

export default App;