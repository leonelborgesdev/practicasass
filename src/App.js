import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Recomendations } from "./components/Recomendations/Recomendations";
import { Works } from "./components/Works/Works";
import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Landing />
      <Body />
      <Works />
      <Portfolio />
      <Recomendations />
    </div>
  );
}

export default App;
