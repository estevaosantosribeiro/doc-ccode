const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

const linkBlocos = document.querySelector('.link-blocos');
const linkEditor = document.querySelector('.link-editor');
const linkInicio = document.querySelector('.link-inicio');

linkInicio.addEventListener('click', (event) => {
  document.querySelector('.hamburger').click();
})
linkBlocos.addEventListener('click', (event) => {
    document.querySelector('.hamburger').click();
    if(!document.querySelector('.accordion-blocos').classList.contains('active')){
        document.querySelector('#mostrar-blocos').click();
    }
})
linkEditor.addEventListener('click', (event) => {
    document.querySelector('.hamburger').click();
    if(!document.querySelector('.accordion-editor').classList.contains('active')){
        if(document.querySelector('.accordion-blocos').classList.contains('active')){
            document.querySelector('.accordion-blocos').classList.remove('active');
            console.log('por favor aparece ifo');
        } else {
            console.log('por favor aparece elese');
        }
        document.querySelector('#mostrar-editor').click();
    } else {
        if(document.querySelector('.accordion-blocos').classList.contains('active')){
            document.querySelector('.accordion-blocos').classList.remove('active');
        }
    }
})

const inputPesquisa = document.querySelector('#pesquisar');
const btnPesquisar = document.querySelector('#btn-pesquisar');

btnPesquisar.addEventListener('click', () => {
  const pesquisa = inputPesquisa.value;
})

