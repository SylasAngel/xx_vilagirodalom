/**
 * @typedef {Author:string,Creation:string,FirstConcept:string,SecCreation?:string,SecConcept?:string} Author A táblázat adatai tömbjének típusa
 */

    /**
     * @type {HTMLTableSectionElement} táblázat törzse
     */
    const tbody = document.querySelector('#htmlTableBody') //id alapján lekérjük a táblázattörzsöt

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
    AddRow(SimpleArr,tbody) //meghívjuk a függvényt, hogy hozzáadja az új sort
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
    AddRow(DoubleArr,tbody) //meghívjuk a függvényt, hogy hozzáadja a kettő új sort
})

/**
 * egy új sort vagy sorokat fog hozzáadni egy táblázat törzshöz
 * @param {Author} DataArray  tömb ami tartalmazza az adatokat
 * @param {HTMLTableSectionElement} TbodyAppend a törzs amihez hozzáfűzzük az új sort
 * @returns {void} nem returnol semmit
 */
function AddRow(DataArray,TbodyAppend) //definiáljuk a függvényt
{
        /**
     * @type {HTMLTableRowElement} táblázat sor
     */
    const tableRow = document.createElement('tr') //táblázat sor elemet létrehozzuk
    TbodyAppend.appendChild(tableRow) //hozzáfűzzük a törzshöz

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const FirstCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(FirstCell) //hozzáfűzés a sorhoz
    FirstCell.innerText = DataArray.Author //belső szöveg, Szerző elem

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const SecondCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(SecondCell) //hozzáfűzés a sorhoz
    SecondCell.innerText = DataArray.Creation //belső szöveg, Mű elem

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    const ThirdCell = document.createElement('td') //cella elem létrehozás
    tableRow.appendChild(ThirdCell) //hozzáfűzés a sorhoz
    ThirdCell.innerText = DataArray.FirstConcept //belső szöveg, Fogalom elem

    if(DataArray.SecConcept != undefined && DataArray.SecCreation != undefined) //igazág megnézzük hogy a második mű és fogalom adatok az üresek-e
    {
    /**
     * @type {HTMLTableRowElement} 2.sor
     */
    const SecondRow = document.createElement('tr') //létrehozunk egy 2. sort
    TbodyAppend.appendChild(SecondRow) //hozzáfűzzük a törszhöz

    /**
     * @type {HTMLTableCellElement} cella
     */
    const FourthCell = document.createElement('td') //cella elem létrehozás
    SecondRow.appendChild(FourthCell) //hozzáfűzés a sorhoz
    FourthCell.innerText = DataArray.SecCreation //belső szöveg, 2. mű elem

    /**
     * @type {HTMLTableCellElement} cella
     */
    const FifthCell = document.createElement('td') //cella elem létrehozás
    SecondRow.appendChild(FifthCell) //hozzáfűzés a sorhoz
    FifthCell.innerText = DataArray.SecConcept //belső szöveg, 2. Fogalom elem

    FirstCell.rowSpan = 2 //sorszélességet átállítjuk 2-re , mert ez duplasoros
    }
}