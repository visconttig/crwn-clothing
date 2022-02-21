import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component.jsx";




function App() {
  return (
    <div>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
