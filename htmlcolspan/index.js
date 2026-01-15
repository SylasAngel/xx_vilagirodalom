
/**
 * @typedef {Author:string, Creation:string,Concept:string,ConceptTwo?:string} Author a táblázat elemeinek a típusai
 */

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
     * @type {Author} simple gombhoz rövid sor adatai
     */
    const SimpleArr = { //tömb deklarálás
        Author: 'Újszerző', //Szerző
        Creation: 'ÚjMű', //Mű
        Concept: 'ÚjFogalom' //fogalom1
    }
    addRow(SimpleArr,tbody) //meghívjuk a függvényt, új sort ad hozzá a táblázattörzshöz a tömb adataival
})

/**
 * @type {HTMLButtonElement} doublebutton
 */
const doublebutton = document.querySelector('#doublebutton') //lekérjük a doublebuttont az idja alapján
doublebutton.addEventListener('click',function(){ //Event a click-re
    /**
     * @type {HTMLTableSectionElement} a táblázat törzse
     */
    const tbody = document.querySelector('#tableBody') //lekérjük id alapján a táblázat törzsét

    /**
     * @type {Author} double gombhoz sor adatai
     */
    const DoubleArr = { //a tömb adatait megadjuk, a sornak az adatait tartalmazza
        Author:'ÚjDoubleSzerző', //Szerző
        Creation:'ÚjDoubleMű', //Mű
        Concept:'ÚjDoubleFogalom1', //fogalom1
        ConceptTwo:'ÚjDoubleFogalom2' //fogalom2
    }
    addRow(DoubleArr,tbody) //meghívjuk a függvényt, új sort ad hozzá a táblázattörzshoz a tömb adataival
})

/**
 * Hozzáad egy új sort ahhoza táblázathoz amihez akarjuk
 * @param {Author} DataArray tömb ami tartalmazza a sor adatait
 * @param {HTMLTableSectionElement} AppendTo amihez hozzáfűzzük a sort
 * @returns {void} nem returnol semmivel
 */
function addRow(DataArray, AppendTo) //függvény deklarálás
{
    /**
     * @type {HTMLTableRowElement} táblázat új sora
     */
    const tableRow = document.createElement('tr') //létrehozunk egy sort
    AppendTo.appendChild(tableRow) //hozzáfűzzük a törzshöz


    /**
     * @type {HTMLTableCellElement} új cella
     */
    const FirstTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(FirstTableCell) //hozzáfűzzük a sorhoz
    FirstTableCell.innerText = DataArray.Author //belső szöveg

    /**
     * @type {HTMLTableCellElement} új cella
     */
    const SecondTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(SecondTableCell) //hozzáfűzzük a sorhoz
    SecondTableCell.innerText = DataArray.Creation //belső szöveg

        /**
     * @type {HTMLTableCellElement} új cella
     */
    const ThirdTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(ThirdTableCell) //hozzáfűzzük a sorhoz
    ThirdTableCell.innerText = DataArray.Concept //belső szöveg

    if(DataArray.ConceptTwo != undefined) //megnézzük hogy a második fogalom undefined-e, igazág
    {
    /**
    * @type {HTMLTableCellElement} új cella
    */
    const FourthTableCell = document.createElement('td') //létrehozunk egy cellát
    tableRow.appendChild(FourthTableCell) //hozzáfűzzük a sorhoz
    FourthTableCell.innerText = DataArray.ConceptTwo //belső szöveg
    }
    else //hamis ág
    {
        ThirdTableCell.colSpan = 2 //oszlopszélességet átállítjuk 2-re, mert nincsen második fogalom       
    }
   
}








