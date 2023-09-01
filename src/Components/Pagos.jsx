import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import { Url1 } from '../Utils/Url'
import Button from '@mui/material/Button'
import PagoNuevo from './PagoNuevo'
import { Modal, Box } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export default function Pagos () {
  const [data1, setData] = useState([])
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const llenarData = async () => {
    try {
      const response = await axios.get(Url1())
      setData(response.data.results)
      console.log(response.data.results)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  useEffect(() => {
    llenarData()
  }, [])

  return (
    <><Button size='large' ovariant='contained' onClick={handleOpen} color='success'>AGREGAR PAGO</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, marginTop: 15 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>NUM</StyledTableCell>
              <StyledTableCell align='right'>FECHA</StyledTableCell>
              <StyledTableCell align='right'>EQUIPO</StyledTableCell>
              <StyledTableCell align='right'>VALOR ABONADO</StyledTableCell>
              <StyledTableCell align='right'>VALOR TOTAL</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.name}</StyledTableCell>
                <StyledTableCell align='right'>{row.name}</StyledTableCell>
                <StyledTableCell align='right'>{row.name}</StyledTableCell>
                <StyledTableCell align='right'>{row.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </>

  )
}
