import { useState } from 'react'
import flujos from './mocks/flujos.json'

function App() {  
  const [flujo, setFlujo] = useState(null);
  const [version, setVersion] = useState(null);

  const HandleFlujoChange = (evt) =>{    
    setFlujo(evt.target.value)
    setVersion(null)
    const $versiones = document.getElementById('versiones')
    let versiones = flujos.filter(item => item.flujo === parseInt(evt.target.value))[0].versiones    
    $versiones.innerHTML = `<option value="" selected disabled>Selecciona</option>` + versiones.map((item, index) => (
      `<option key=${index} value=${item.VFL_Id}>${item.VFL_Id}</option>`
    )).join('')
  }

  const HandleVersionChange = (evt) =>{
    console.log(evt.target.value)
    setVersion(evt.target.value)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline flex justify-center pb-5">
        Hello world!
      </h1>
      
      <form className="max-w-sm mx-auto">
        <label htmlFor="flujos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona un flujo</label>
        <select id="flujos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={HandleFlujoChange}>
          <option value="" selected disabled>Selecciona</option>
            {
              flujos.map((flujo, index) => (
                <option key={index} value={flujo.flujo}>{flujo.descripcion}</option>
              ))
            }
        </select>        
        <label htmlFor="versiones" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4">Selecciona una versión</label>
        <select id="versiones" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={HandleVersionChange}>
          <option value="" selected disabled>Selecciona</option>
        </select>
        <h2 className='block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4'>Pasos</h2>
        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
          {
            flujo && version && (
              flujos.filter(item => item.flujo === parseInt(flujo))[0].versiones?.filter(item => item.VFL_Id === parseInt(version))[0].pasos?.map((item, index) => (
                <li key={index}>{item.FLD_Id}</li>
              ))
            )
          }
        </ul>
      </form>
    </>
  )
}

export default App
