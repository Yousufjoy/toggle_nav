import "./App.css";
import Chart from "./components/Chart/Chart";
import DaisyNavbar from "./components/DaisyNavbar";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar />
      <PriceOptions />
      <Chart />
    </>
  );
}

export default App;
