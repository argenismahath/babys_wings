let boton=document.querySelector('#close-button');
let ventana=document.querySelector('#window-notice');
var chelaL=document.querySelector('#chela-list');
let chela=document.querySelector('#chela');
let container=document.querySelector('#container');
chela.addEventListener('click', put);
boton.addEventListener('click', cerrar);


let last='';
container.addEventListener('click', (e) => {

    let show=e.target.id+'_m';

    let listShow=document.querySelector('#'+show);
    console.log(listShow.style.display);

    
    if (last!='') {
        last.style.display='none';
    }
        console.log(last);
        last=listShow;
        

    
    
    try {
        if (listShow.style.display=='none') {
    
            listShow.style.display='block';
            
        }else if(listShow.style.display=='flex'){
    
            listShow.style.display='block';
    
        }else if(listShow.style.display=='block'){
            listShow.style.display='none';
        }else{
            listShow.style.display='block';
        }
    }
    catch(e){
        logMyErrors(e);
    }


    console.log(listShow);});

function open() {
    console.log("")
}

function cerrar() {
    ventana.style.display="none";
}

var put=0;
function put(){
    chelaL.style.display='block'
    // let s=chelaL.classList.toggle('show');
    console.log(put);
}
