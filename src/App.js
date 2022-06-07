import Home from "./routes/home/Home.component.jsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import SignUpForm from "./components/sign-up-form/sign-up-form.component.jsx"
import Shop  from "./routes/shop/shop-page.component.jsx";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/>} >
      <Route index element={ <Home/> } />
      <Route path="shop" element={ <Shop/> } />
      <Route path="auth" element={ <Authentication/> } />
      <Route path="sign-up" element={ <SignUpForm/> } />
      </Route> 
    </Routes>
  );
};

export default App;