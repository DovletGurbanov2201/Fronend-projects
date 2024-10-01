console.log(localStorage);
const rated = () =>{
    (document.head.getAttribute('data-rate') === 'favourite') ? console.log('a') : console.log('b');
}
window.onload = rated