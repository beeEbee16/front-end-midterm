import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import About from './pages/About';
import CartPage from './pages/CartPage';
import Thanks from './pages/Thanks';
import Nav from './Nav';
import ProductDetailPage from './pages/ProductDetailPage';
import { DataProvider } from './context/DataContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/ShopPage' Component={ShopPage}/>
          <Route path='/About' Component={About}/>
          <Route path='/CartPage' Component={CartPage}/>
          <Route path='/Thanks' Component={Thanks}/>
          <Route path='/ProductDetailPage' Component={ProductDetailPage}/>
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
