/**
 * @type {HTMLButtonElement} simplebutton
 */
const simplebutton = document.querySelector('#simplebutton') //lekérjük a simplebuttont az idja alapján
simplebutton.addEventListener('click',function(){ //Event a click-re

    /**
     * @type {HTMLTableSectionElement} a táblázat törzse
     */
    const tbody = document.querySelector('#tableBody') //lekérjük id alapján a táblázat törzsét
    /**
     * @type {HTMLTableRowElement} táblázat új sora
     */
    const tableRow = document.createElement('tr') //létrehozunk egy sort
    tbody.appendChild(tableRow) //hozzáfűzzük a törzshöz

    /**
     * @type {HTMLTableCellElement} új cella
     */
    const FirstTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(FirstTableCell) //hozzáfűzzük a sorhoz
    FirstTableCell.innerText = 'ÚjSzerző' //belső szöveg

    /**
     * @type {HTMLTableCellElement} új cella
     */
    const SecondTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(SecondTableCell) //hozzáfűzzük a sorhoz
    SecondTableCell.innerText = 'ÚjMű' //belső szöveg

    /**
     * @type {HTMLTableCellElement} új cella
     */
    const ThirdTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(ThirdTableCell) //hozzáfűzzük a sorhoz
    ThirdTableCell.innerText = 'ÚjFogalom1' //belső szöveg
    ThirdTableCell.colSpan = 2 //oszlopszélességet átállítjuk 2-re, mert nincsen második fogalom

})