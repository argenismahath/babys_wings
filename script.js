
let ventana = document.querySelector('#window-notice');
var chelaL = document.querySelector('#chela-list');
let chela = document.querySelector('#chela');
let container = document.querySelector('#container');
chela.addEventListener('click', put);


let last = '';
let last2 = '';

let lastbtn = '';
let counter = 0;
let open =false;

container.addEventListener('click', (e) => {

    let now= e.target.id;
    let show = e.target.id + '_m';
    let btn = e.target.id + '-btn';

    // get from the DOM 
    let listShow = document.querySelector('#' + show);
    let listbtn = document.querySelector('#' + btn);

    console.log(e);

    if (e.target.id == 'alitas' || 'costillas' || 'hamburguesa' || 'burrito' || 'taco' || 'jocho' || 'nacho'  || 'bebida') {
        open=true;
        
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
        
        //rotate icon menu
        try {
            if (counter === 0) {
    
                listbtn.classList.add('btn-rotate');
    
                counter++;
            } else if (counter === 1) {
                console.log(lastbtn);
                listbtn.classList.add('btn-rotate');
    
            }
    
        } catch (e) {
    
        }
       
    }

    // close the lats list ope
    try {
        if (last != '' && open==true ) {
            let ultimo=document.querySelector('#'+last2);
            ultimo.style.display = 'none';
            lastbtn.classList.remove('btn-rotate');
            

        }
    } catch (e) {console.log('error '+ e);}





    last2 = e.target.id;
    last=listShow
    lastbtn = listbtn;
    
    console.log('hola');

});

var put = 0;
function put() {

    // chelaL.style.display='block'
    chelaL.classList.toggle('show');

    // let ebtn = document.querySelector('#chela-btn'); ebtn.classList.toggle('btn-rotate');

    // console.log(s);
}
