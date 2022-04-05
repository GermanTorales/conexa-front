import Swal from 'sweetalert2';

export const InvalidTokenSwal = () => {
  Swal.fire({
    title: 'Sesion vencida',
    text: 'Vuelva a iniciar sesion por favor',
    icon: 'error',
  });
};

export const ErrorSwal = () => {
  Swal.fire({
    title: 'Lo siento',
    text: 'Algo salio mal, intentelo mas tarde',
    icon: 'error',
  });
};

export const ErrorLoginSwal = () => {
  Swal.fire({
    title: 'Lo siento',
    text: 'El correo electronico o la contraseña son incorrectos',
    icon: 'error',
  });
};

export const SuccessLoginSwal = () => {
  Swal.fire({
    title: 'Bienvenido',
    text: 'Inicio de sesion exitoso',
    icon: 'success',
  });
};
