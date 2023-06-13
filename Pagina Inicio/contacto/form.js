function registro(evento) {

    evento.preventDefault();

    
    reseteo();

    let nombre = document.getElementById('f_nombre').value;
    let apellido = document.getElementById('f_apellido').value;
    let mensaje = document.getElementById('f_mensaje').value;
    let email = document.getElementById('f_email').value;

    var contenedorError = document.getElementById('errores');
    var listaError = document.createElement('ul');

    let errorNombre = validarNombre(nombre);
    let errorApellido = validarApellido(apellido);
    let errorMensaje = validarMensaje(mensaje);

    if (errorNombre) {
        agregarError('Error. Debe completar con su nombre.', listaError);
        campoError('f_nombre');
    }

    if (errorApellido) {
        agregarError('Error. Debe completar con su apellido.', listaError);
        campoError('f_apellido');
    }

    if (errorMensaje) {
        agregarError('Error. El mensaje no puede estar vacío y no debe superar los 200 caracteres.', listaError);
        campoError('f_mensaje');
    }

    if (!validarEmail(email)) {
        agregarError('Correo electrónico inválido', listaError);
        campoError('f_email');
    }

    if (listaError.childElementCount > 0) {
        contenedorError.appendChild(listaError);
        contenedorError.style.display = 'flex';
    } else {
        document.getElementById('datos').style.display = 'none';
        document.getElementById('msjFinal').style.display = 'block';

        document.getElementById('registroExitoso').textContent = 'MENSAJE ENVIADO CON EXITO';
    }
}

function validarNombre(nombre) {
    let errorItem = document.createElement('li');

    if (nombre.trim() === '') {
        errorItem.textContent = 'Error. Debe completar con su nombre.';
        return errorItem;
    }

    return null;
}

function validarApellido(apellido) {
    let errorItem = document.createElement('li');

    if (apellido.trim() === '') {
        errorItem.textContent = 'Error. Debe completar con su apellido.';
        return errorItem;
    }

    return null;
}

function validarMensaje(mensaje) {
    let errorItem = document.createElement('li');

    if (mensaje.trim() === '') {
        errorItem.textContent = 'Error. El mensaje no puede estar vacío.';
        return errorItem;
    }
    if (mensaje.length > 200) {
        errorItem.textContent = 'Error. El mensaje no debe superar los 200 caracteres.';
        return errorItem;
    }

    return null;
}

function validarEmail(email) {
    let req = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return req.test(email);
}

function agregarError(message, listaError) {
    let errorItem = document.createElement('li');
    errorItem.textContent = message;
    listaError.appendChild(errorItem);
}

function campoError(idCampo) {
    document.getElementById(idCampo).classList.add('error');
}

function reseteo() {
    let contenedorError = document.getElementById('errores');
    let listaError = document.querySelector('#errores ul');
    let campo = document.querySelectorAll('#datos input');

    if (listaError) {
        contenedorError.removeChild(listaError);
    }

    contenedorError.style.display = 'none';

    for (let i = 0; i < campo.length; i++) {
        campo[i].classList.remove('error');
    }
}

function resetearFormulario() {
    document.getElementById('f_nombre').value = '';
    document.getElementById('f_apellido').value = '';
    document.getElementById('f_mensaje').value = '';
    document.getElementById('f_email').value = '';
}

document.getElementById('registrarOtro').addEventListener('click', function () {
    resetearFormulario();
    document.getElementById('datos').style.display = 'block';
    document.getElementById('msjFinal').style.display = 'none';
    reseteo();
});