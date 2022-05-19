
export const Paciente = ({paciente, setpaciente, eliminarPaciente}) => {

  const { id, nombre, propietario, email, fecha, sintomas } = paciente;  

  const handleEliminar = () => {
    const respuesta = window.confirm('¿Deseas eliminar este paciente?');
    if(respuesta){ eliminarPaciente(id); }
  }

  return (
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case"> { nombre } </span> </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case"> { propietario } </span> </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case"> { email } </span> </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: <span className="font-normal normal-case"> { fecha } </span> </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case"> { sintomas } </span> </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" type="button"
          onClick={ () => setpaciente(paciente) }
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button"
          onClick={ handleEliminar }
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}