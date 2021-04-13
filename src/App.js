import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frases from './components/Frases';
import {useState, useEffect} from 'react';
import Spinner from './components/Spinner';

function App() {
  //crear el state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(()=>{
//aqui traigo los datos de la API
consultarAPI();
  },[]);

  const consultarAPI = async()=>{
// Mostrar spinner
    setCargando(true);
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    // mostrar el componente frase
    setTimeout(()=>{
      setCargando(false);
    setPersonaje(resultado[0])
    },2500);
    
  };

  //operador ternario[ (condicion logica)?(cuando es verdadera): (codigo cuando la condicion es falsa)]
const mostrarComponente = (cargando === true)? (<Spinner/>) : (<Frases personaje={personaje}/>)


  return (
    <section className='container d-flex flex-column align-items-center my-5'>
      <img src={process.env.PUBLIC_URL+'logo.png'} alt="logo de los Simpsons" className='w-75'/>
      <Button variant="warning" className='my-4 w-50' onClick={() => consultarAPI()}>Obtener Frase</Button>
      {mostrarComponente}
      
    </section>
  );
}

export default App;
