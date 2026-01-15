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
    const FirstCell = CreateCell(DataArray.Author,tableRow,'td') //Létrehozzuk az első cellát, amit egy változóba beleteszünk, hogy majd tudjunk neki rowspant adni

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    CreateCell(DataArray.Creation,tableRow,'td') //létrehozzuk a második cellát

    /**
     * @type {HTMLTableCellElement} táblázat cella
     */
    CreateCell(DataArray.FirstConcept,tableRow,'td') //létrehozzuk a harmadik cellát

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
    CreateCell(DataArray.SecCreation,SecondRow,'td') //létrehozzuk a negyedik cellát
    /**
     * @type {HTMLTableCellElement} cella
     */
    CreateCell(DataArray.SecConcept,SecondRow,'td') //létrehozzuk az ötödik cellát

    FirstCell.rowSpan = 2 //sorszélességet átállítjuk 2-re , mert ez duplasoros
    }
}

/**
 * létrehoz egy cellát
 * @param {string} InText a szöveg ami benne lesz a cellába 
 * @param {HTMLTableRowElement} ToAppend aihez hozzáfűzzük a cellát
 * @param {string} Type amilyen típusu lesz a cella td/th
 * @returns {HTMLTableCellElement} returnoli magát a cellát
 */
function CreateCell(InText,ToAppend,Type) //függvény ami létrehoz egy cellát
{
    /**
     * @type {HTMLTableCellElement} cella 
     */
    const tCell = document.createElement(Type) //létrehozunk egy cellát
    ToAppend.appendChild(tCell) //hozzáfűzzük amit megadtunk a toAppendbe
    tCell.innerText = InText //belső szöveg, a paraméter alapján
    return tCell //returnoli magát a cellát
}