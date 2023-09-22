import "./App.css";
import Chart from "./components/Chart/Chart";
import DaisyNavbar from "./components/DaisyNavbar";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar />
      <PriceOptions />
      <Chart />
      <Phones></Phones>
    </>
  );
}

export default App;
