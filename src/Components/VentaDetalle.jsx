import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import '../Styles/Style.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import PagoNuevo from './PagoNuevo'
import React from 'react'
// los props son las propiedades que recibde desde el cardCLientes, todas las propiedades y valores del api consultada
export default function VentaDetalle (props) {
  const { info, handleClose } = props
  const { name } = info
  const yesterday = dayjs().subtract(1, 'day')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  return (
    <div className='box1'>
      <Card sx={{ maxWidth: 845 }}>
        <Stack direction='row' spacing={2}>
          <Button size='large' color='error' onClick={handleClose}>X</Button>
        </Stack>
        <CardMedia
          sx={{ height: 340, width: 740, backgroundSize: 'contain' }}
          image='https://images.vexels.com/media/users/3/204689/isolated/preview/d95e217b20b49b281285417355a34d94-icono-de-telefono-celular-azul.png'
          title='name'
        />
        <CardContent>
          <div className='center'>
            <Typography gutterBottom variant='h5' component='div'>
              <h2> {name}</h2>
            </Typography>
          </div>

          <Typography variant='body2' color='text.secondary'>

            <div id='contenedor'>
              <div>
                <h3 className='letraNegrita'> INFORMACION DE EQUIPO  </h3>

                <div className='box1'>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' }
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField label='DESCRIPCIÓN' color='primary' focused className='textsize' />
                    <TextField label='DISPONIBLE' color='primary' focused className='textsize' />
                    <TextField label='VALOR' color='primary' focused className='textsize' />
                    <div className='box2'>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={[
                            'DatePicker'
                          ]}
                        >
                          <DemoItem label='FECHA INICIO'>
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
              </div>
            </div>

          </Typography>
          <div className='box2'>
            <tr>
              <td>
                <CardMedia
                  sx={{ height: 230, width: 150, backgroundSize: 'contain' }}
                  image='https://w7.pngwing.com/pngs/295/748/png-transparent-blue-diskette-icon-computer-icons-floppy-disk-save-button-miscellaneous-blue-angle-thumbnail.png'
                  title='Actualizar'
                  onClick={handleClose}
                />
              </td>
              <td /><td /><td /><td />
              <td> <CardMedia
                sx={{ height: 250, width: 180, backgroundSize: 'contain' }}
                image='https://img.freepik.com/vector-premium/icono-pago-tarjeta-terminal-bancaria-pago-tarjeta_256722-639.jpg?w=2000'
                title='AgregarPago'
                onClick={handleOpen}
                   />
              </td>
            </tr>
          </div>
        </CardContent>
      </Card>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className='modalstyle'>
            <PagoNuevo handleClose={handleClose} />
          </Box>
        </Modal>
      </div>
    </div>
  )
}
