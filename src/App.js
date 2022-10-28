import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
    <Header/>
    <ItemListContainer greeting = "Bienvenidos a Muind!"/>
    <Footer/>
    </>
    );
}

export default App;
