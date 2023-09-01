import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Rutas from './Utils/Rutas'
import MenuPrincipal from './Components/MenuPrincipal'
import { BrowserRouter as Router } from 'react-router-dom'

// agregar la funcion de rutas para llamar las paginas
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <MenuPrincipal />
      <Rutas />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
