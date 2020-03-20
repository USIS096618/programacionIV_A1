var $ = el => document.querySelector(el), 
    frmAlumnos = document.getElementById("frmAlumnos");
frmAlumnos.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    
    let alumnos = {
        accion    : 'nuevo',
        codigo    : $("#txtCodigoAlumno").value,
        nombre    : $("#txtNombreAlumno").value,
        direccion : $("#txtDireccionAlumno").value,
        telefono  : $("#txtTelefonoAlumno").value
    };
    fetch(`private/modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(alumnos)}`).then( resp=>resp.json() ).then(resp=>{
        $("#respuestaAlumno").innerHTML = `
            <div class="alert alert-success" role="alert">
                ${resp.msg}
            </div>
        `;
    });
});