


document.addEventListener('DOMContentLoaded',()=>{

    let usuario =JSON.parse(localStorage.getItem('item'));

    if (usuario==null){
        alert('Usted DEBE loggearse para usar el supersistema');
        location.href="login.html";
    }else{
        document.getElementById('usuario').innerHTML=usuario.nombre;
        document.getElementById('nivel').innerHTML=usuario.nivel;
        document.getElementById('correo').innerHTML=usuario.correo;
    }
    document.getElementById('chau').addEventListener('click',()=>{
        localStorage.removeItem('item');
        alert("Usted ha salido del sistema");
        location.href="login.html";
    })
});