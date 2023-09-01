import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuPrincipal from '../Components/MenuPrincipal' // Importa tu componente de cajón
import Clientes from '../Components/Clientes'
import Equipos from '../Components/Equipos'
import Pagos from '../Components/Pagos'
import Reportes from '../Components/Reportes'
import Ventas from '../Components/Ventas'
import ClienteNuevo from '../Components/ClienteNuevo'

// importar tdas las rutas incluido el menu principal
// Coloca las rutas dentro de una constantes
// <Route>: Es el componente de enrutamiento proporcionado por React Router que define cómo se maneja la correspondencia de rutas.
// path='catalogoservicios': Esto define la ruta que debe coincidir para activar este componente. por ejemplo, si la URL coincide con '/catalogoservicios', se renderizará el componente CatalogoServicios.
// en el contexto de Routes, cada <Route> define una ruta específica y cómo se debe renderizar el contenido relacionado con esa ruta.
const Rutas = () => {
  return (
    <Routes>
      <Route element={<MenuPrincipal />}>
        <Route path='clientes' element={<Clientes />} />
        <Route path='equipos' element={<Equipos />} />
        <Route path='Reportes' element={<Reportes />} />
        <Route path='pagos' element={<Pagos />} />
        <Route path='ventas' element={<Ventas />} />
        <Route path='clienteNuevo' element={<ClienteNuevo />} />
        <Route path='/' element={<MenuPrincipal />} />
      </Route>
    </Routes>
  )
}

export default Rutas
