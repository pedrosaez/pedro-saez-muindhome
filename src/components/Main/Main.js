import './Main.css';
import fotoMesa from '../img/mesaJulia.jpg';

const Main = () => {

    return (
        <div className="card" style={{width: '300px'}}>
            <img src={fotoMesa} class="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Mesa Julia</h5>
                <a href="https://google.com" className="btn btn-primary">Agregar (+)</a>
            </div>
        </div>
    )
}

export default Main