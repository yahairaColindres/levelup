import React, { useEffect, useState } from 'react'
import { UrlCustomer, UrlByNameCustomer } from '../Utils/Url'
import '../Styles/Style.css'
import TextField from '@mui/material/TextField'
import CardClientes from './CardClientes'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ClienteNuevo from './ClienteNuevo'

export default function Clientes (props) {
  const [clientes, setClientes] = useState([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // para cerrar el modal del nuevo empleado , debe enviarse los pa´ramenteo desde esta pantalla, ya que desde aqui se envía la apertura del modal
  // en el caso de Detalle Cliente no se envia desde esta página porque no se muestra el modal desde aqui, por lo que se debe enviar el par´´ametro desde CardClientes, que abre el modal
  // Clientes-> (CierreModal enviando Props) --> (CLiente Nuevo)
  // Clientes-> (CardDetalleClientes)---->(CierreModal enviando Props) --> (DetalleCliente)

  useEffect(() => {
    // si cambia el search entonces activa el use Effect
    // utilizo la url y enio los parametros //ejecuta la api
    const url = search ? UrlByNameCustomer() + search : UrlCustomer()
    console.log(url)

    fetch(url) // extrae el jason en caso de que la promesa traiga informacion
      .then((response) => response.json()) // si trae la infoamcion entonces la enia hacia un arreglo
      .then((data) => {
        console.log(search)
        setClientes(data)
        // data trae toda la informacion del api, pero despues del . se debe seleccionar el valor que trae el api , donde se encuentra la informacion requerida
        // para luego usar destructuring en card
        if (search) {
          // si trae informacion debe filtrar por nombre
          console.log(data)
          setClientes(data)
        } else {
          setClientes(data)
          console.log(data)
        }
      })
    // en caso de que exista un error se envia el catcha con u nmsj
      .catch((error) => {
        /* mostrar la informacion en panatlla */
        console.log('Error en busqueda de la informacion:', error)
      })
  }, [search]) // cuando el estado de search cambia, se activa el use efect

  return (
    <div>
      <h1>CLIENTES</h1>
      <div>
        <Button size='large' onClick={handleOpen} variant='contained' color='primary'>AGREGAR NUEVO </Button>
      </div>

      <div className='center'>
        <TextField
          id='outlined-basic'
          label='Buscar aqui'
          variant='outlined'
          sx={{ backgroundColor: 'white', width: 300 }}
           /* aqui se crea el inpunt para enviar la informaci[on en caso de que se desee filtrar la informacion y con el onchange llama la funcion */
          value={search}
          onChange={(event) => {
            // envia los valores a Search tamando como objetivo el valor que se acaba de escribur
            setSearch(event.target.value)
          }}
        />
      </div>
      <div className='container'>
        {// manda los valores al card para extraer la información y mostrarla en pantalla // los parametros que se envian con el mapeo, se reciben en card como props
          // eslint-disable-next-line react/jsx-key
          clientes.map((cli, index) => (<CardClientes clientes={cli} />))
         }
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className='modalstyle'>
            <ClienteNuevo handleClose={handleClose} />
          </Box>
        </Modal>
      </div>

    </div>

  )
}
