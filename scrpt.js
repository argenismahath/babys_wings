let boton=document.querySelector('#close-button');
let ventana=document.querySelector('#window-notice');
let chelaL=document.querySelector('#chela-list');
let chela=document.querySelector('#chela');
chela.addEventListener('click', put);
boton.addEventListener('click', cerrar);

function cerrar() {
    ventana.style.display="none";
}

var put=0;
function put(){
    console.log(put);
    if(put==0){
    console.log(put);

        chelaL.style.display='block';
        put=1;
    console.log(put);

    }
    else{
    console.log(put);

        put=0;
        chelaL.style.display='none';
    }
    console.log(put);
}
