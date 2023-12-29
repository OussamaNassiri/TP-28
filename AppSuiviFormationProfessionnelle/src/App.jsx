import "./App.css";
import { Container } from "./index"
import {Header,Contenu} from "./sectionAccueil/index"


function App() {
  return (
    <>
      <Header />
      <Container>
        <Contenu />
      </Container>
    </>
  )
}

export default App;