import logo from './logo.svg'
import './App.css'
import Rutas from './Utils/Rutas'
import MenuPrincipal from './Components/MenuPrincipal'

function App () {
  return (
    <>
      <div className='App'>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MenuPrincipal />
            <Rutas />
            Learn React
          </a>
        </header>

      </div>
    </>
  )
}

export default App
