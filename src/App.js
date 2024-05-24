import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Recomendations } from "./components/Recomendations/Recomendations";
import { Uploader } from "./components/Uploader/Uploader";
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
      <Uploader />
      <Footer />
    </div>
  );
}

export default App;
