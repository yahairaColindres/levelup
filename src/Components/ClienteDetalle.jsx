import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import '../Styles/Style.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { UrlCustomer } from '../Utils/Url'
import { showAlerts } from '../Utils/Alerts'
import { Alert, AlertTitle } from '@mui/material'
import React, { useState } from 'react'
// los props son las propiedades que recibde desde el cardCLientes, todas las propiedades y valores del api consultada
export default function ClienteDetalle (props) {
  const [alertGral, setalertGral] = useState('')
  const [ErrorMsj, setErrorMsj] = useState('')
  const { clientes, handleClose } = props
  const { id, category, photo } = clientes
  // almacenar las alertas en una constante  /const { handleClose } = props
  // se crean constates con cada campo uqe se va a llenar  // cada valor de las constantes se almacenara en cada input con el termino de value y con el onchance se agrega el valor al UseState
  const urlCustomer = UrlCustomer() + '/' + id
  console.log(urlCustomer)
  const [identityCostumer, setUpdatedIdentity] = useState(clientes.identityCostumer)
  const [name, setUpdateName] = useState(clientes.name)
  const [phone, setUpdatePhone] = useState(clientes.phone)
  const [adress, setUpdateAdress] = useState(clientes.adress)
  const [email, setUpdateEmail] = useState(clientes.email)
  console.log(props)
 // DEBE colocarse el mismo valor de los parametros que recibe el API
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      identityCostumer,
      name,
      phone,
      adress,
      email
    }
    try {
      // trae la dirección del API, Y lo envia como post para guardar la informacion
      // se envia como jason porque asi se necesita recibir en la <API>
      // la respuesta (response)  tiene que ser un jason tambien para mostrar las validaciones a los usuarios
      console.log(urlCustomer)
      console.log(data)
      const response = await fetch(urlCustomer, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      console.log(data)
      if (response.ok) {
        console.log('Cliente agregado exitosamente')
        handleClose()
        setalertGral(showAlerts.SaveAlert)
        showAlerts(alertGral)
      } else {
        console.error('Error al agregar cliente')
        setErrorMsj(responseData.message)
      }
    } catch (error) {
      console.error('la solicitud no se pudo completar:', error)
      handleClose()
      setalertGral(showAlerts.ErrorAlert)
      showAlerts(alertGral)
    }
  }
  console.log(phone)
  return (
    <div className='box1'>
      <Card sx={{ maxWidth: 845, Height: '100%' }}>
        <Stack direction='row' spacing={2}>
          <Button size='large' color='error' onClick={handleClose}>X</Button>
        </Stack>
        <CardMedia
          sx={{ height: 340, width: 740, backgroundSize: 'contain' }}
          image={photo}
          title='name'
        />
        <Stack sx={{ width: '100%' }} spacing={2}>
          {ErrorMsj
            ? (
              <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                {ErrorMsj}
              </Alert>
              )
            : null}
        </Stack>

        <CardContent>
          <div className='center'>
            <Typography gutterBottom variant='h5' component='div'>
              <h2 className='letraFuente'>  {name}</h2>
            </Typography>
          </div>

          <Typography variant='body2' color='text.secondary'>

            <div>
              <div>
                <h2> DATOS PERSONALES  </h2>
                <TextField label='IDENTIDAD' readOnly='0' value={identityCostumer} onChange={(e) => setUpdatedIdentity(e.target.value)} focused='1' className='textsize' />
                <TextField label='NOMBRE' readOnly='0' value={name} onChange={(e) => setUpdateName(e.target.value)} focused='1' className='textsize' />
                <TextField label='TELÉFONO' readOnly='1' value={phone} onChange={(e) => setUpdatePhone(e.target.value)} focused='1' className='textsize' />
                <TextField label='CORREO ELECTRONICO' readOnly='0' value={email} onChange={(e) => setUpdateEmail(e.target.value)} focused='1' className='textsize' />
                <TextField label='DIRECCIÓN' readOnly='0' value={adress} onChange={(e) => setUpdateAdress(e.target.value)} variant='standard' focused='1' style={{ width: '90%', margin: '0 auto', marginBottom: '50px' }} />
                <TextField label='CATEGORÍA' value={category} color='primary' focused style={{ width: '32%', margin: '0 auto', marginBottom: '40px' }} />
              </div>
            </div>
          </Typography>
        </CardContent>
        
        <form onSubmit={handleSubmit}>
          <CardMedia
            sx={{ height: 180, width: 130, backgroundSize: 'contain', margin: '0 auto' }}
            image='https://w7.pngwing.com/pngs/295/748/png-transparent-blue-diskette-icon-computer-icons-floppy-disk-save-button-miscellaneous-blue-angle-thumbnail.png'
            title='Actualizar'
            type='submit'
            onClick={handleSubmit}
          />
        </form>
      </Card>

    </div>
  )
}
