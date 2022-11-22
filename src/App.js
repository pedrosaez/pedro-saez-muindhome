import './App.css';
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';


const App = () => {
        
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='detail/:idProd' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={ <Form/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
};

export default App;
