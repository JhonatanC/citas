import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { ListadoPacientes } from './components/ListadoPacientes';

function App() {

  const [pacientes, setpacientes] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? [] );
  const [paciente, setpaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    // return () => {}
  }, [pacientes]);
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );
    setpacientes(pacientesActualizados);
  }

  return (
    <>
      <div className='container mx-auto'>
        <Header />
        <div className='mt-12 md:flex'>
          <Form pacientes = { pacientes } setpacientes = { setpacientes } paciente = { paciente } setpaciente = { setpaciente } />
          <ListadoPacientes pacientes = { pacientes } setpaciente = { setpaciente } eliminarPaciente = { eliminarPaciente } />
        </div>
      </div>
    </>
  );
}

export default App;
