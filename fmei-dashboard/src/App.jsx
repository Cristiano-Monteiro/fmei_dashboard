import { useState } from "react";

import Container from "./components/Container/Container";

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

  return (
    <Container>
      <MainNavbar/>
      <MainContent/>
      <MobileNavbar 
        showInputFileBox={showInputFileBox}
        showCalendarBox={showCalendarBox}
      />
      {boxAddTable && <InputFileBox/>}
      {calendarBox && <CalendarBox/>}
    </Container>
  );
};

export default App;