import './App.css';
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';


const App = () => {
        
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='detail/:idProd' element={<ItemDetailContainer/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
};

export default App;
