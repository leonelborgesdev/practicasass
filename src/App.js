import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Landing />
      <Body />
    </div>
  );
}

export default App;
