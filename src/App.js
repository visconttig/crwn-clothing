import Home from "./routes/home/Home.component.jsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";


const Shop = () => {
  return (
    <div>
      <h1>Im the SHOP page</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/>} >
      <Route index element={ <Home/> } />
      <Route path="shop" element={ <Shop/> } />
      </Route> 
    </Routes>
  );
};

export default App;