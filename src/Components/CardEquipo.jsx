import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import Box from '@mui/material/Box'
import EquipoDetalle from './EquipoDetalle'

export default function CardEquipo (props) {
  const { info } = props
  const { name } = info
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // handel open se usa para llamar el modal, envia el valor en verdadero siemrep
  // es necesario usar el use state para abrir y cerrar
  // se debe importar la libreria del modal
  // se debe importar la pantalla del card donde se pintara la informacion
  // en el boton se llama el onclick se llama al handelOpen

  return (
    <div className='box'>
      <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          sx={{ height: 140, width: 300, backgroundSize: 'contain' }}
          image='https://img.freepik.com/vector-gratis/ilustracion-moderna-concepto-computadora-escritorio_114360-11616.jpg?w=2000'
          title='name'
        />

        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>

        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size='small'>
            Ver informacion
          </Button>
        </CardActions>
      </Card>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
                    // cierra modal
                    // pinta el detalle del cliente en la parte de box
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className='modalstyle'>
            <EquipoDetalle info={info} handleClose={handleClose} />
          </Box>
        </Modal>
      </div>

    </div>
  )
}
