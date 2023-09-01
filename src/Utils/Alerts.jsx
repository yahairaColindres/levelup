import Swal from 'sweetalert2'
export function showAlerts (props) {
  const ErrorAlert =
[
  Swal.fire({
    title: 'ERROR',
    text: 'No se ha guardado la solicitud',
    icon: 'error',
    position: 'center',
    timer: 1500
  })

]

  const SaveAlert =
[
  Swal.fire({
    title: 'GUARDAR',
    text: 'Guardado Exitosamente',
    icon: 'success',
    position: 'center',
    timer: 1500
  })

]
  return { SaveAlert, ErrorAlert }
}
