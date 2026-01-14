/**
 * @typedef {{Author:string,FirstCreation:string,FirstConcept:string,SecondCreation?:string,SecondConcept?:string}} AuthorDat típusdefiníció az adatsorokhoz
 */

/**
 * @type {string []} szó tömb am fejléc adatait tartalmazza
 */
const headerList = ['Szerző','Mű','Fogalmak'] //fejléc elemei
/**
 * @type {AuthorDat []} adatsorok adatait tartalmazó tömb
 */
const DataArray =[ //adattömb deklarálás
    {
        Author: 'Appolliniare', //első sor szerző adata
        FirstCreation: 'A megsebzett galamb és a szökőkút', //első sor mű adata
        FirstConcept: 'képvers', //első sor fogalom adata
        SecondCreation: 'Búcsú', //második sor első mű adata
        SecondConcept: 'avantgárd' //második sor fogalom adata
    },
    {
        Author: 'Thomas Mann', //harmadik sor szerző adata
        FirstCreation: 'Mario és a varázsló', //harmadik sor mű adata
        FirstConcept: 'kisregény' //harmadik sor fogalom adata
    },
    {
        Author: 'Franz Kafka', //negyedik sor szerző adata
        FirstCreation: 'A per', //negyedik sor mű adata
        FirstConcept: 'regény', //negyedik sor fogalom adata
        SecondCreation: 'Az átvlátozás', //ötödik sor mű adata
        SecondConcept: 'kisregény' //ötödik sor fogalom adata  
    },
]

/**
 * @type {HTMLTableElement} táblázat
 */
const table = document.createElement('table') //táblázat elemet létrehozunk
document.body.appendChild(table) //táblázat hozzáfűzése a html törzséhez

/**
 * @type {HTMLTableSectionElement} fejléc
 */
const thead = document.createElement('thead') //fejléc elem létrehozás
table.appendChild(thead) //táblázathoz hozzáfűzés

/**
 * @type {HTMLTableRowElement} sor
 */
const tableRow = document.createElement('tr') //táblázat sor létrehozás
thead.appendChild(tableRow) //hozzáfűzés a fejléchez

/**
 * @type {HTMLTableCellElement} szerző cella
 */
const headerAuthor = document.createElement('th') //fejléc szerző elem
tableRow.appendChild(headerAuthor) //hozzáfűzés a fejléchez
headerAuthor.innerText = headerList[0] //belsző szöveg megadása a headerlist objectből

/**
 * @type {HTMLTableCellElement} mű cella
 */
const headerCreation = document.createElement('th') //fejléc mű elem
tableRow.appendChild(headerCreation) //hozzáfűzés a fejléchez
headerCreation.innerText = headerList[1] //belsző szöveg megadása a headerlist objectből

/**
 * @type {HTMLTableCellElement} fogalom cella
 */
const headerConcept = document.createElement('th') //fejléc fogalom elem
tableRow.appendChild(headerConcept) //hozzáfűzés a fejléchez
headerConcept.innerText = headerList[2] //belsző szöveg megadása a headerlist objectből

/**
 * @type {HTMLTableSectionElement} táblázat törzse
 */
const tbody = document.createElement('tbody') //táblázat törzs elem létrehozás
table.appendChild(tbody) //táblázathoz hozzáfűzés






/**
 *  ki fogja írni a táblázatot
 * 
 * @param {AuthorDat []} AuthorArray tömb ami tartalmazza a táblázat törzs adatait
 * @returns {void} //nem returnol semmivel
 */
function RenderTable(AuthorArray) //függvény, ami kiírja a táblázatot
{
    tbody.innerHTML = '' //a táblázat törzs belsejét kiürítjük
    for(const e of AuthorArray) //végigiterálunk az adattömbön
    {
    /**
     * @type {HTMLTableRowElement} 1. sor elem létrehozása
     */
    const DataRow = document.createElement('tr') //sor elem létrehozás
    tbody.appendChild(DataRow) //hozzáfűzés a törzshöz

    /**
     * @type {HTMLTableCellElement} 1. adat cella
     */
    const RowDataFirst = document.createElement('td') //adatsor első eleme
    DataRow.appendChild(RowDataFirst) //hozzáfűzés az adatsorhoz
    RowDataFirst.innerText = e.Author //belső szöveg, szerző

    /**
     * @type {HTMLTableCellElement} 2. adat cella
     */
    const RowDataSecond = document.createElement('td') //adatsor második eleme
    DataRow.appendChild(RowDataSecond) //hozzáfűzés az adatsorhoz
    RowDataSecond.innerText = e.FirstCreation //belső szöveg, mű

    /**
     * @type {HTMLTableCellElement} 3. adat cella
     */
    const RowDataThird = document.createElement('td') //adatsor harmadik eleme
    DataRow.appendChild(RowDataThird) //hozzáfűzés az adatsorhoz
    RowDataThird.innerText = e.FirstConcept //belső szöveg, fogalom

    if(e.SecondCreation != undefined && e.SecondConcept != undefined) //megnézzük hogy a második fogalom, és a második mű értéke üres-e, igazág
    {
        /**
         * @type {HTMLTableRowElement} 2.sor elem létrehozása
         */
        const SecondDataRow = document.createElement('tr') //új sor létrehozása
        tbody.appendChild(SecondDataRow) //hozzáfűzése a törzshöz

        /**
         * @type {HTMLTableCellElement} 4. adat cella
         */
        const RowDataFourth = document.createElement('td') //új cella létehozása
        SecondDataRow.appendChild(RowDataFourth) //hozzáfűzése az új sorhoz
        RowDataFourth.innerText = e.SecondCreation //belső szöveg, második mű

        /**
         * @type {HTMLTableCellElement} 5. adat cella
         */
        const RowDataFifth = document.createElement('td') //új cella létrehozása
        SecondDataRow.appendChild(RowDataFifth) //hozzáfűzése az új sorhoz
        RowDataFifth.innerText = e.SecondConcept //belső szöveg, második fogalom

        RowDataFirst.rowSpan = 2 //a sorszélességet átállítjuk 2-re

    }


    }

    
}
RenderTable(DataArray) //meghívjuk a függvényt, beletesszük a DataArray tömböt

/**
 * @type {HTMLButtonElement} gomb
 */
const simpleButton = document.createElement('button') //létrehozunk egy gomb elemet
document.body.appendChild(simpleButton) //hozzáfűzzük a html testéhez
simpleButton.innerText = 'Simple Button' //a gomb belső szövegét megírjuk
simpleButton.addEventListener('click', function() //hozzáadunk egy eventListenert, ahhoz amikor rákattintunk
{
    /**
     * @type {AuthorDat} új sor amit beleteszünk az adattömbbe
     */
    const newObj = { //új otbjekt dekkarálás
        Author:'Miguel de Cervantes', //szerző adat
        FirstCreation: 'Donquioxote', //első mű adat
        FirstConcept: 'regény' //első fogalom adat
    }
    DataArray.push(newObj) //az adattömbbe beletesszük az objektet
    RenderTable(DataArray) //Rendereljük az updatelt táblázatot
})

/**
 * @type {HTMLButtonElement} gomb
 */
const DoubleButton = document.createElement('button') //létrehozunk egy gomb elemet
document.body.appendChild(DoubleButton) //hozzáfűzzük a html testéhez
DoubleButton.innerText = 'Double Button' //a gomb belső szövegét megírjuk
DoubleButton.addEventListener('click', function() //hozzáadunk egy eventListenert, ahhoz amikor rákattintunk
{
    /**
     * @type {AuthorDat} új két sor amit beleteszünk az adattömbbe
     */
    const newObj = { //új otbjekt dekkarálás
        Author:'Author', //szerző adat
        FirstCreation: 'FirstCreation', //első mű adat
        FirstConcept: 'FirstConcept', //első fogalom adat
        SecondCreation: 'SecondCreation', //második mű adat
        SecondConcept: 'SecondConcept' //második fogalom adat
    }
    DataArray.push(newObj) //az adattömbbe beletesszük az objektet
    RenderTable(DataArray) //Rendereljük az updatelt táblázatot
})







