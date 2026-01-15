/**
 * @typedef {Author:string,Creation:string,FirstConcept:string,SecCreation?:string,SecConcept?:string} Author A táblázat adatai tömbjének típusa
 */

/**
 * @type {HTMLButtonElement} gomb elemet lekérjük
 */
const simpleButton = document.querySelector('#simplebutton') //id alapján lekérjük a gombot
simpleButton.addEventListener('click',function (){ //addEventListener a simple gombra kattintásra
    /**
     * @type {Author} simple button tömb adatai
     */
    const SimpleArr = { //tömb definiálás
        Author:'SimpleAuthor', //szerző
        Creation:'SimpleCreation', //mű
        FirstConcept:'SimpleConcept' //Fogalom
    }
    /**
     * @type {HTMLTableSectionElement} táblázat törzse
     */
    const tbody = document.querySelector('#htmlTableBody') //id alapján lekérjük a táblázattörzsöt
    /**
     * @type {HTMLTableRowElement} táblázat sor
     */
    const tableRow = document.createElement('tr') //táblázat sor elemet létrehozzuk
    tbody.appendChild(tableRow) //hozzáfűzzük a törzshöz

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const FirstCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(FirstCell) //hozzáfűzés a sorhoz
    FirstCell.innerText = SimpleArr.Author //belső szöveg, Szerző elem

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const SecondCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(SecondCell) //hozzáfűzés a sorhoz
    SecondCell.innerText = SimpleArr.Creation //belső szöveg, Mű elem

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const ThirdCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(ThirdCell) //hozzáfűzés a sorhoz
    ThirdCell.innerText = SimpleArr.FirstConcept //belső szöveg, Fogalom elem

})