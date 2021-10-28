
let ventana = document.querySelector('#window-notice');
var chelaL = document.querySelector('#chela-list');
let chela = document.querySelector('#chela');
let container = document.querySelector('#container');
chela.addEventListener('click', put);


let last = '';
let last2 = '';

let lastbtn = '';
let counter = 0;
//set varible (open) to difine if a list is open or close
let open = false;
let ultimo = document.querySelector('#' + last2 + '_m');

container.addEventListener('click', (e) => {

    let now = e.target.id;
    let show = e.target.id + '_m';
    let btn = e.target.id + '-btn';

    // get from the DOM 
    let listShow = document.querySelector('#' + show);
    let listbtn = document.querySelector('#' + btn);

    if (e.target.id == 'alitas' || 'costillas' || 'hamburguesa' || 'burrito' || 'taco' || 'jocho' || 'nacho' || 'bebida') {

        //show and hide main lists
        try {

            if (listShow.style.display == 'none') {

                listShow.style.display = 'block';
                open = true;

            } else if (listShow.style.display == 'flex') {

                listShow.style.display = 'block';
                open = true;

            } else if (listShow.style.display == 'block') {
                listShow.style.display = 'none';
                open = false;
            } else {
                listShow.style.display = 'block';
                open = true;
            }

        }
        catch (e) { }

        //rotate icon menu

        if (listShow.style.display == 'block') {

            listbtn.classList.add('btn-rotate');
        }


        if (last != '') {

            let last3 = document.getElementById(lastbtn);
            let lastsections = document.getElementById(last);

            if (lastsections.style.display == 'none' || last!=listShow.id) {

                last3.classList.remove('btn-rotate');
                console.log(last + 'last');
                lastsections.style.display = 'none';
            }

        }


        if (last == listShow.id) {
            counter++;
            console.log(counter);
            if (counter > 2) {
                counter = 3;
            }
        } else { counter = 0; }

    }

    // close the lats list OR open
    try {
        if (now == 'alitas' || now == 'costillas' || now == 'hamburguesa' || now == 'burrito' || now == 'taco' || now == 'jocho' || now == 'nacho' || now == 'bebida') {


            last2 = e.target.id;
            last = listShow.id;
            lastbtn = listbtn.id;
            console.log('FUNTION CLOSE OR OPEN');


        }
    } catch (e) { console.log('error ' + e); }


});

function put() {

    // chelaL.style.display='block'
    chelaL.classList.toggle('show');

    // let ebtn = document.querySelector('#chela-btn'); ebtn.classList.toggle('btn-rotate');

    // console.log(s);
}



//DEV: OLEIDER JESUS GONZALEZ VETANCOURT
//EMAIL:oleidergonzalez11@gmail.com