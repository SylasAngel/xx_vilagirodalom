/**
 * @type {HTMLButtonElement} simplebutton
 */
const simplebutton = document.querySelector('#simplebutton') //lekérjük a simplebuttont az idja alapján
simplebutton.addEventListener('click',function(){ //Event a click-re
    console.log('Sikeres a teszt') //leteszteljük, hogy jól működik-e a gomb lekérés
})