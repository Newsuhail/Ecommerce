
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/Cart';
import Fotter from './Components/Fotter/Fotter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory Category='men'/>}/>
          <Route path='/womens' element={<ShopCategory Category='women'/>}/>
          <Route path='/kids' element={<ShopCategory Category='kid'/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/crat' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignUp/>}></Route>
          
        </Routes>
        <Fotter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
