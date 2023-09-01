import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import '../Styles/Style.css'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function VentaNuevo (props) {
// se envian los props desde clientes para poder cerrar el modal, llamando la opcion de hancle close
  const { handleClose } = props
  const Categorias = [
    { label: 'Venta' },
    { label: 'Reparación' }
  ]

  const yesterday = dayjs().subtract(1, 'day')
  return (
    <div className='box1'>
      <Card>
        <Stack direction='row' spacing={2}>
          <Button size='large' color='error' onClick={handleClose}>X</Button>
        </Stack>
        <CardMedia
          sx={{ height: 340, width: 740, backgroundSize: 'contain' }}
          image='https://images.vexels.com/media/users/3/158483/isolated/preview/68984377806c969d9504f0faaaede75f-silueta-de-computadora.png'
          title='FotoCliente'
        />

        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            INGRESO DE NUEVO EQUIPO PARA VENTA
          </Typography>
        </CardContent>

        <div className='box1'>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete='off'
          >
            <TextField label='NOMBRE CLIENTE' color='primary' focused className='textsize' />
            <TextField label='DESCRIPCIÓN' color='primary' focused className='textsize' />
            <div className='box2'>
              <div>
                <Autocomplete disablePortal id='combo-box-demo' color='primary' focused options={Categorias} sx={{ width: '100%', margin: '0 auto' }} renderInput={(params) => <TextField {...params} label='SERVICIO' />} />
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    'DatePicker'
                  ]}
                >
                  <DemoItem label='Fecha Entrega'>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={['year', 'month', 'day']}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </Box>
        </div>

        <CardActions>
          <Button size='small' />
        </CardActions>
        <CardMedia
          sx={{ height: 180, width: 130, backgroundSize: 'contain', margin: '0 auto' }}
          image='data:image/jpeg;base64,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'
          title='Guardar'
          onClick={handleClose}
        />
      </Card>

    </div>

  )
}
