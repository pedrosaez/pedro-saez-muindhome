import './App.css';
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


const App = () => {
    
    const onAdd = (qty) => console.log(qty);
        
  return (
    <>
    <Header/>
    <ItemListContainer greeting = "Bienvenidos a Müind!"/>
    <ItemCount stock = {18} onAdd ={onAdd}/>
    <Footer/>
    </>
    );
};

export default App;
