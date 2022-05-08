import Home from "./routes/home/Home.component.jsx";
import { Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
    </Routes>
  );
};

export default App;