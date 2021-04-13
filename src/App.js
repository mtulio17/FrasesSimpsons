import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frases from './components/Frases';
import {useState, useEffect} from 'react';

function App() {
  //crear el state
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
//aqui traigo los datos de la API
consultarAPI();
  },[]);

  const consultarAPI = async()=>{
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    setPersonaje(resultado[0])
  }

  return (
    <section className='container d-flex flex-column align-items-center my-5'>
      <img src={process.env.PUBLIC_URL+'logo.png'} alt="logo de los Simpsons" className='w-75'/>
      <Button variant="warning" className='my-4 w-50' onClick={() => consultarAPI}>Obtener Frase</Button>
      <Frases personaje={personaje}/>
    </section>
  );
}

export default App;
