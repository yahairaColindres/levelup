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

// los props son las propiedades que recibde desde el cardCLientes, todas las propiedades y valores del api consultada
export default function EquipoDetalle (props) {
  const { info, handleClose } = props
  const { name } = info
  const yesterday = dayjs().subtract(1, 'day')
  return (
    <div className='box1'>
      <Card sx={{ maxWidth: 845 }}>
        <Stack direction='row' spacing={2}>
          <Button size='large' color='error' onClick={handleClose}>X</Button>
        </Stack>
        <CardMedia
          sx={{ height: 340, width: 740, backgroundSize: 'contain' }}
          image='https://images.vexels.com/media/users/3/158483/isolated/preview/68984377806c969d9504f0faaaede75f-silueta-de-computadora.png'
          title='name'
        />
        <CardContent>
          <div className='center'>
            <Typography gutterBottom variant='h5' component='div'>
              <h2>  {name}</h2>
            </Typography>
          </div>

          <Typography variant='body2' color='text.secondary'>

            <div id='contenedor' className='box2'>
              <div>
                <h3 className='letraNegrita'> INFORMACION DE EQUIPO  </h3>
                <TextField label='ESTADO' value={name} color='primary' focused className='textsize' />
                <TextField label='CLIENTE' value={name} color='primary' focused className='textsize' />
                <TextField label='EQUIPO' value={name} color='primary' focused className='textsize' />
                <TextField label='DIAGNÓTICO' value={name} color='primary' focused className='textsize' />
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        'DatePicker'
                      ]}
                    >
                      <DemoItem label='FECHA ENTREGA'>
                        <DatePicker
                          defaultValue={yesterday}
                          disablePast
                          views={['year', 'month', 'day']}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 230, width: 150, backgroundSize: 'contain', margin: '0 auto' }}
          image='https://w7.pngwing.com/pngs/295/748/png-transparent-blue-diskette-icon-computer-icons-floppy-disk-save-button-miscellaneous-blue-angle-thumbnail.png'
          title='Actualizar'
          onClick={handleClose}
        />
      </Card>
    </div>
  )
}
