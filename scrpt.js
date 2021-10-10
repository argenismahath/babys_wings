let boton = document.querySelector('#close-button');
let ventana = document.querySelector('#window-notice');
var chelaL = document.querySelector('#chela-list');
let chela = document.querySelector('#chela');
let container = document.querySelector('#container');
boton.addEventListener('click', cerrar);
chela.addEventListener('click', put);


let last = '';
let last2 = '';

let lastbtn = '';
let counter = 0;
container.addEventListener('click', (e) => {

    let show = e.target.id + '_m';
    let btn = e.target.id + '-btn';

    // get from the DOM 
    let listShow = document.querySelector('#' + show);
    let listbtn = document.querySelector('#' + btn);

    console.log(listShow);

    try {
        if (last != '') {
            last.style.display = 'none';
            lastbtn.classList.remove('btn-rotate');
            // lastbtn.classList.remove('btn-rotate');

            // lastbtn.classList.add('btn-rotate-origin');

        }
    } catch (e) { }

    //show and hide main lists
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
    catch (e) { }

    console.log(listShow);
    console.log(last);

    //click inside
    try {
         if (counter>0){
    
            if (last==e.target.id) {

    //         listShow.style.display = 'block';}

    //     else{listShow.style.display='none'}  
    //     }
    // } catch (e) {
        
    // }

    //rotate icon menu
    try {
        console.log(btn);
        if (counter === 0) {

            listbtn.classList.add('btn-rotate');

            counter++;
        } else if (counter === 1) {
            console.log(lastbtn);
            listbtn.classList.add('btn-rotate');

        }

    } catch (e) {

    }

    last2 = e.target.id;
    last=listShow
    lastbtn = listbtn;
    
    console.log(last+ listShow);

};

function open() {
    console.log("")
}

function cerrar() {
    ventana.style.display = "none";
}

var put = 0;
function put() {

    // chelaL.style.display='block'
    chelaL.classList.toggle('show');

    // let ebtn = document.querySelector('#chela-btn'); ebtn.classList.toggle('btn-rotate');

    // console.log(s);
}
