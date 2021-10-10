let boton = document.querySelector('#close-button');
let ventana = document.querySelector('#window-notice');
var chelaL = document.querySelector('#chela-list');
let chela = document.querySelector('#chela');
let container = document.querySelector('#container');
chela.addEventListener('click', put);
boton.addEventListener('click', cerrar);


let last = '';
let lastbtn='';
let counter=0;
container.addEventListener('click', (e) => {

    let show = e.target.id + '_m';
    let btn=e.target.id+'-btn';

    // get from the DOM 
    let listShow = document.querySelector('#' + show);
    let listbtn=document.querySelector('#'+btn);

    console.log(listbtn);
    
    
    if (last != '') {
        last.style.display = 'none';
        lastbtn.classList.remove('btn-rotate');
        // lastbtn.classList.remove('btn-rotate');

        // lastbtn.classList.add('btn-rotate-origin');

    }
    
    
        try {
        if (listShow.style.display == 'none') {

            listShow.style.display = 'block';

        } else if (listShow.style.display == 'flex') {

            listShow.style.display = 'block';

        } else if (listShow.style.display == 'block') {
            listShow.style.display = 'none';
        } else {
            listShow.style.display = 'block';
        }
    }
    catch (e) {
        logMyErrors(e);
    }

    //rotate icon menu
    try {
        console.log(btn);
        if (counter===0) {
            
            listbtn.classList.add('btn-rotate');
            
            counter++;
        }else if(counter===1){
            console.log(lastbtn);
            listbtn.classList.add('btn-rotate');
            
        }

    } catch (e) {
        
    }

    console.log(last);
    last = listShow;
    lastbtn=listbtn;     
                                                




    console.log(listShow);
});

function open() {
    console.log("")
}

function cerrar() {
    ventana.style.display = "none";
}

var put = 0;
function put() {
    // chelaL.style.display='block'
    let s = chelaL.classList.toggle('show');

    let ebtn = document.querySelector('#chela-btn'); ebtn.classList.toggle('btn-rotate');

    console.log(put);
}
