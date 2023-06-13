
function validar() {
    let primero = document.querySelector("form input");
    primero.focus();

    let reg_correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let f_nombre = document.querySelector("#f_nombre");
    f_nombre.classList.remove("error");

    let f_apellido = document.querySelector("#f_apellido");
    f_apellido.classList.remove("error");

    let f_email = document.querySelector("#f_email");
    f_email.classList.remove("error");

    let f_mensaje = document.querySelector("#f_mensaje");
    f_mensaje.classList.remove("error");

    let lta_errores = document.querySelector("#errores");
    lta_errores.innerHTML = "";
    lta_errores.innerHTML = " ";
    lta_errores.style.display = "none";

    let hubo_error = false;

    if ((f_nombre.value == "") || (f_nombre.value == " ")) {
        f_nombre.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. Debe completar con su nombre.");
        hubo_error = true;
    }

    if (f_apellido.value == "") {
        f_apellido.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. Debe completar con su apellido.");
        hubo_error = true;
    }

    if (f_mensaje.value == "") {
        f_mensaje.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. El campo del mensaje no puede estar vacio");
        hubo_error = true;
    } else if (f_mensaje.value.length > 200) {
        f_mensaje.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. La Longitud máxima del mensaje es de 200 caracteres");
        hubo_error = true;
    }

    if (reg_correo.test(f_email.value)) {
        alert('Su mensaje se envio correctamente.');
        alert('Gracias por elegirnos. En las proximas horas, un representante se contactara con Usted.')
        return true;
    } else {
        alert('Email invalido. Reintentar.');
        return false;
    }
}