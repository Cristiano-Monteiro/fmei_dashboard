import Container from "./components/Container/Container";

import MainNavbar from "./components/MainNavbar/MainNavbar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import MainContent from "./components/MainContent/MainContent";


function App() {
  return (
    <Container>
      <MainNavbar/>
      <MainContent/>
      <MobileNavbar/>
    </Container>
  );
};

export default App;