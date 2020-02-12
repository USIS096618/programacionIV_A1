document.addEventListener("DOMContentLoaded", (event) => {
    const formAlumnos = document.querySelector("#frmAlumno");

    formAlumnos.addEventListener("submit",(e) => {
        e.preventDefault();

        let Codigo = document.querySelector("#txtCodigoAlumno").value,
            Nombre = document.querySelector("#txtNombreAlumno").value,
            Direccion = document.querySelector("#txtDireccionAlumno").value,
            Telefono = document.querySelector("#txtTelefonoAlumno").value;
            
        var KeyCodigo = "Codigo"+Codigo;
        var KeyNombre = "Nombre"+Codigo;
        var KeyDireccion = "Direccion"+Codigo;
        var KeyTelefono = "Telefono"+Codigo;

        if('localStorage' in window){
            window.localStorage.setItem(KeyCodigo, Codigo);
            window.localStorage.setItem(KeyNombre, Nombre);
            window.localStorage.setItem(KeyDireccion, Direccion);
            window.localStorage.setItem(KeyTelefono, Telefono);
        }
        else{
            alert("No se pudo Guardar");
        }
    });
    document.querySelector("#btnRecuperarAlumno").addEventListener("click", (e) => {
        if('localStorage' in window){
            let Codigo = document.querySelector("#txtCodigoAlumno").value;
            if(Codigo != ""){
                document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("Codigo" + Codigo);
                document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("Nombre" + Codigo);
                document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("Direccion" + Codigo);
                document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("Telefono" + Codigo);
            }
            else{
                alert("Agregue el codigo de los datos a recuperar");
            }
        }
        else{
            alert("No se encuentran los datos solicitados");
        }
    })
});