




function initialize() {
    for (let c of content) {
    let divimg = document.createElement('div');
    let image = document.createElement('img');
    let em = document.createElement('em');
    let a = document.createElement('a');
    let p = document.createElement('p');
    let imgfav = document.createElement('img');
    let imgdet = document.createElement('img');
        em.textContent = c.title;
        p.textContent = c.text;

        image.classList.add('prodotto');
    imgfav.classList.add('fav');
    p.classList.add('hidden');
    imgdet.classList.add('det');

    imgfav.setAttribute('src', "favourite.png");
    image.setAttribute('src', c.img_src);
        imgdet.setAttribute('src', "dettagli.png");
        a.href = "";
    let container = document.querySelector(".product");
        container.appendChild(divimg);
        divimg.appendChild(em);
        divimg.appendChild(imgfav);
    
    
    divimg.appendChild(a);
    a.appendChild(image);
        divimg.appendChild(imgdet);
        divimg.appendChild(p);
  
   

    
    }
}
initialize();

function reset(event) {

    const image = event.currentTarget;
    const content = document.querySelector(".preferiti");
    const em = document.querySelector(".preferiti em");
    let allElementsTitle = document.querySelectorAll('.preferiti div em');
    let Remove = event.target.parentElement.querySelector('em').textContent;
    for (let elem of allElementsTitle) {
        if (elem.textContent === Remove) {
            let mark = elem.parentElement.parentElement.querySelector('.fav');
           image.src = "favourite.png"
            elem.parentElement.remove();
            
           
           
        }
    }
    
   
    image.removeEventListener('click', reset);
    image.addEventListener('click', Favourite);
}

function Favourite(event){
    const image = event.currentTarget;
    image.src = "cuore2.png";

   
    const divv = event.currentTarget.parentElement;
    const container = document.querySelector(".preferiti");
   
    const diiv = divv.cloneNode(true);
    
    container.appendChild(diiv);
    image.removeEventListener('click', Favourite);
    image.addEventListener('click', reset);
}
const image = document.querySelectorAll("img.fav");
for (i of image) {
    i.addEventListener('click', Favourite);
}

function handleSearch(event) {
    console.log(event.target.value);
    let inserimento = event.target.value.toLowerCase();
    let container = document.querySelectorAll('.product div');
   
    if (inserimento !== "") {
        for (let c of container) {
            let nome = c.querySelector('em').firstChild.textContent.toLowerCase();
            console.log(c.querySelector('em').firstChild.textContent.toLowerCase());
            console.log(nome.indexOf(inserimento));
            if (nome.search(inserimento) === -1) {
                console.log(c);
                c.style.display = 'none';

            }
            else if (nome.search(inserimento) !== -1){
                c.style.display ='';
            }
        }
    }
    else {
        for (let c of container) {
            c.style.display = '';
        }
    }
}
const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', handleSearch);


function Details(event) {
    event.target.parentElement.querySelector('p').classList.remove('hidden');
    event.currentTarget.src = "menodettagli.png";
    event.target.removeEventListener('click', Details);
    event.target.addEventListener('click', NoDetails);
}

function NoDetails(event) {
    event.target.parentElement.querySelector('p').classList.add('hidden');
    event.currentTarget.src = "dettagli.png";
    event.target.removeEventListener('click', NoDetails);
    event.target.addEventListener('click', Details);
}
const det = document.querySelectorAll('img.det');
for (let d of det) {
    d.addEventListener('click', Details);
}