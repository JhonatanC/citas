import { useEffect } from "react"
import { Paciente } from "./Paciente"

export const ListadoPacientes = ({pacientes, setpaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0){
      console.log('Nuevo paciente');
    }  
    // return () => {}
  }, [pacientes]);
  

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {
        pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10"> Administa tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span> </p>
            { pacientes.map( paciente => ( <Paciente key={ paciente.id } paciente={paciente} setpaciente={setpaciente} eliminarPaciente={ eliminarPaciente } /> )) }
          </>
        )
        :
        (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10"> Comienaza agregando pacientes <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span> </p>
          </>
        )
      }

    </div>
  )
}