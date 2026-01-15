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

/**
 * @type {HTMLButtonElement} gomb elemet lekérjük
 */
const doubleButton = document.querySelector('#doublebutton') //id alapján lekérjük a gombot
doubleButton.addEventListener('click',function (){ //addEventListener a simple gombra kattintásra
    /**
     * @type {Author} simple button tömb adatai
     */
    const DoubleArr = { //tömb definiálás
        Author:'DoubleAuthor', //szerző
        Creation:'DoubleCreation1', //mű
        FirstConcept:'DoubleConcept1', //Fogalom
        SecCreation: 'DoubleCreation2', //mű 2
        SecConcept: 'DoubleConcept2' //fogalom 2
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
    FirstCell.innerText = DoubleArr.Author //belső szöveg, Szerző elem

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const SecondCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(SecondCell) //hozzáfűzés a sorhoz
    SecondCell.innerText = DoubleArr.Creation //belső szöveg, Mű elem

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const ThirdCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(ThirdCell) //hozzáfűzés a sorhoz
    ThirdCell.innerText = DoubleArr.FirstConcept //belső szöveg, Fogalom elem

    /**
     * @type {HTMLTableRowElement} 2.sor
     */
    const SecondRow = document.createElement('tr') //létrehozunk egy 2. sort
    tbody.appendChild(SecondRow) //hozzáfűzzük a törszhöz

    /**
     * @type {HTMLTableCellElement} cella
     */
    const FourthCell = document.createElement('td') //cella elem létrehozás
    SecondRow.appendChild(FourthCell) //hozzáfűzés a sorhoz
    FourthCell.innerText = DoubleArr.SecCreation //belső szöveg, 2. mű elem

    /**
     * @type {HTMLTableCellElement} cella
     */
    const FifthCell = document.createElement('td') //cella elem létrehozás
    SecondRow.appendChild(FifthCell) //hozzáfűzés a sorhoz
    FifthCell.innerText = DoubleArr.SecConcept //belső szöveg, 2. Fogalom elem

    FirstCell.rowSpan = 2 //sorszélességet átállítjuk 2-re , mert ez duplasoros


})