function registro(evento) {
    evento.preventDefault();

    reseteo();

    let formulario = document.getElementById('datos');

    let nomyape = formulario.f_nya.value;
    let telefono = formulario.f_telefono.value;
    let email = formulario.f_email.value;
    let archivo = formulario.f_archivo.value;

    let errorNombre = validarNombre(nomyape);
    let errorTelefono = validarTelefono(telefono);
    let errorArchivo = validarArchivo(archivo);

    if (errorNombre) {
      mostrarError('error_nya', ' * Debe completar con su nombre y/o apellido.');
      campoError('f_nya');
    }

    if (errorTelefono) {
      mostrarError('error_telefono', ' * Debe ingresar un número de teléfono.');
      campoError('f_telefono');
    }

    if (!validarEmail(email)) {
      mostrarError('error_email', ' * Formato de correo electrónico inválido o campo vacío.');
      campoError('f_email');
    }

    if (errorArchivo) {
      mostrarError('error_archivo', ' * Debe cargar su archivo CV.');
      campoError('f_archivo');
    }

    if (!errorNombre && !errorTelefono && !errorArchivo && !formularioVacio(formulario)) {
      // Aquí puedes enviar el formulario utilizando AJAX o realizar otra acción deseada.
      // Por ejemplo, puedes utilizar la función fetch para enviar los datos a un servidor.

      // Crea un objeto FormData y agrega los valores del formulario
      let formData = new FormData(formulario);

      // Realiza la solicitud AJAX
      fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          // Maneja la respuesta del servidor
          if (response.ok) {
            // El registro se realizó con éxito
            formulario.reset();
            // Puedes mostrar un mensaje de éxito si lo deseas
          } else {
            // Ocurrió un error en el servidor
            throw new Error('Error en el servidor');
          }
        })
        .catch(error => {
          // Maneja los errores de la solicitud AJAX
          console.error(error);
          // Puedes mostrar un mensaje de error al usuario
        });
    }
  }

  function validarNombre(nomyape) {
    return nomyape.trim() === '';
  }

  function validarTelefono(telefono) {
    return telefono.trim() === '';
  }

  function validarArchivo(archivo) {
    return archivo.trim() === '';
  }

  function validarEmail(email) {
    let req = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return req.test(email);
  }

  function mostrarError(idCampo, mensaje) {
    let campoError = document.getElementById(idCampo);
    campoError.textContent = mensaje;
    campoError.style.display = 'inline-block';
  }

  function campoError(idCampo) {
    document.getElementById(idCampo).classList.add('error');
  }

  function reseteo() {
    let camposError = document.getElementsByClassName('error');
    for (let i = 0; i < camposError.length; i++) {
      camposError[i].style.display = 'none';
    }
  }

  function formularioVacio(formulario) {
    let campos = formulario.elements;
    for (let i = 0; i < campos.length; i++) {
      if (campos[i].type !== 'submit' && campos[i].value.trim() !== '') {
        return false;
      }
    }
    return true;
  }

  document.getElementById('datos').addEventListener('submit', registro);