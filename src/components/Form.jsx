import { useEffect, useState } from "react"
import { Error } from "./Error";

export const Form = ({pacientes, setpacientes, paciente, setpaciente}) => {

  const [nombre, setnombre] = useState(''); // Nombre de la mascota
  const [propietario, setpropietario] = useState(''); // Nombre del propietario
  const [email, setemail] = useState(''); // Email del propietario
  const [fecha, setfecha] = useState(''); // Fecha de la cita
  const [sintomas, setsintomas] = useState(''); // Síntomas de la mascota
  const [error, seterror] = useState(false); // Validación para el error  

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ){
      setnombre(paciente.nombre);
      setpropietario(paciente.propietario);
      setemail(paciente.email);
      setfecha(paciente.fecha);
      setsintomas(paciente.sintomas);
    }
    // return () => {}
  }, [paciente]);
  

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( [nombre, propietario, email, fecha, sintomas].includes('') ) {
      seterror(true);
      return;
    } 

    seterror(false);

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id){
      // Editando el registro
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState );
      setpacientes(pacientesActualizados);
      setpaciente({});
    } else {
      // Nuevo registro
      objPaciente.id = generarId();
      setpacientes([...pacientes, objPaciente]);
    }

    setnombre('');
    setpropietario('');
    setemail('');
    setfecha('');
    setsintomas('');
    
  }
  
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'> Añade Pacientes y {''} <span className='text-indigo-600 font-bold'>Administralos</span> </p>

      <form onSubmit={ handleSubmit } className="bg-white mx-5 my-10 shadow-md rounded-lg py-10 px-5 mb-10">

        { error && <Error msg = 'Todos los campos son obligatorios' /> }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text"
            placeholder="Nombre de la mascota"
            value={ nombre }
            onChange={ (e) => setnombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={ propietario }
            onChange={ (e) => setpropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email de contacto"
            value={ email }
            onChange={ (e) => setemail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha</label>
          <input
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={ fecha }
            onChange={ (e) => setfecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={ sintomas }
            onChange={ (e) => setsintomas(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <input
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all"
            type="submit"
            value={ paciente.id ? 'Editar Paciente' : 'Agregar paciente' }
          />
        </div>

      </form>
    </div>
  )
}