import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Link, useLocation, Outlet } from 'react-router-dom'
// se debe exportar el react-router-dom para poder realizar los enlaces a las paginas, antes se debe instalar en el proyecto con el comando yarn add react-router-dom@6 o yarn add react-router-dom
const drawerWidth = 240

// se usa para las transiciones del menu lateral
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
)

// se usa para las transiciones del menu lateral
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

export default function MenuPrincipal () {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  const path = location.pathname

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  /* 1. defie las rutas que va a tomar la pagina segun el texto que seleccione en el menu1
         2. Dentro del path se coloca la ruta donde se debe direccionar, las rutas se encuentran en la funcion Rutas
         3. creea el listado mediante el mapeo que es un ciclo para no estar repitiendo codigo en la parte del {menu1.map((item, index) => (.
         4. los nombres los extrae de menu1, son los nombres de los titulos del encabezado
         5. tambien extrae el path que es donde obtiene la ruta */

  const menu1 = [
    { title: 'clientes', path: '/clientes' },
    { title: 'equipos', path: '/equipos' },
    { title: 'ventas', path: '/ventas' },
    { title: 'pagos', path: '/pagos' },
    { title: 'reportes', path: '/reportes' }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            PANTALLA PRINCIPAL
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='container'>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center', // Centra horizontalmente
              alignItems: 'center'// Centra verticalmente
            }
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {menu1.map((item, index) => (
              <ListItem

              // eslint-disable-next-line react/jsx-props-no-multi-spaces
                key={item.title} disablePadding
                component={Link}
                to={item.path}
                button
                selected={item.path === path}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Main open={open}>
            <DrawerHeader />
          </Main>

        </Drawer>
      </div>
      <Outlet />

    </Box>

  )
}
