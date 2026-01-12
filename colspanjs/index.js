
/**
 * @typedef {{Author:string,Creation:string,FirstConcept:string,SecondConcept?:string}} AuthorData típusdefiníció a táblázat adataira
 */
/**
 * @type {string []} header elemei
 */
const headerArr = ['Szerző','Mű','Fogalmak'] //header elemei

/**
 * @type {AuthorData []} Array elemei, ahol SecondConcept nem biztos hogy van
 */
const DataArray = [ //Array
    {
        Author:'Apollinaire', //Szerző
        Creation:'A megsebzett galamb és a szökőkút', //Mű
        FirstConcept: 'képvers', //Első fogalom
        SecondConcept: 'emlékezés' //második fogalom
    },
    {
        Author:  'Apollinaire', //Szerző
        Creation:'Búcsú', //Mű
        FirstConcept: 'avantgárd' //Első fogalom
    },
    {
        Author:  'Thomas Mann', //Szerző
        Creation:'Mario és a varázsló', //Mű
        FirstConcept: 'kisregény' //Első fogalom
    },
    {
        Author: 'Franz Kafka', //Szerző
        Creation: 'A per', //Mű
        FirstConcept: 'regény' //Első fogalom
    },
    {
        Author:'Franz Kafka', //Szerző
        Creation:'Az átváltozás', //Mű
        FirstConcept: 'kisregény', //Első fogalom
        SecondConcept: 'groteszk' //második fogalom
    }
]

    /**
     * @type {HTMLTableElement} Táblázat 
     */
    const table = document.createElement('table') //Létrehozunk egy táblázat elementet
    document.body.appendChild(table) //Hozzáfűzzük a doksi Bodyjához
    /**
     * @type {HTMLTableSectionElement} fejléc
     */
    const thead = document.createElement('thead') //Létrehozunk egy fejléc elemet
    table.appendChild(thead) //Hozzáfűzzük a táblázathoz
    /**
     * @type {HTMLTableRowElement} egy táblázatsor
     */
    const tableRow = document.createElement('tr') //létrehozunk egy táblázatsort
    thead.appendChild(tableRow) //hozzáfűzzük a fejléchez

    /**
     * @type {HTMLTableCellElement} fejléc Cella
     */
    const tableHeader = document.createElement('th') //Létrehozunk egy cellát a fejléchez
    tableRow.appendChild(tableHeader) //hozzáfűzzük a fejléchez fűzött sorhoz
    tableHeader.innerText = headerArr[0] //A belső szövege a felécArray első eleme lesz
    /**
     * @type {HTMLTableCellElement} fejléc Cella
     */
    const tableHeaderSec = document.createElement('th') //Létrehozunk egy cellát a fejléchez
    tableRow.appendChild(tableHeaderSec) //hozzáfűzzük a fejléchez fűzött sorhoz
    tableHeaderSec.innerText = headerArr[1] //A belső szövege a felécArray második eleme lesz
    /**
     * @type {HTMLTableCellElement} fejléc Cella
     */
    const tableHeaderThir = document.createElement('th') //Létrehozunk egy cellát a fejléchez
    tableRow.appendChild(tableHeaderThir) //hozzáfűzzük a fejléchez fűzött sorhoz
    tableHeaderThir.innerText = headerArr[2] //A belső szövege a felécArray harmadik eleme lesz

    /**
     * @type {HTMLTableSectionElement} TáblázatTörzs
     */
    const tbody = document.createElement('tbody') //Létrehozunk egy táblázat törzs elemet
    table.appendChild(tbody) //amit hozzáfűzünk a táblázathoz
    


/**
 * Rendereli az index.htmlben a táblázatot
 * @param {AuthorData []} DatArrayFunc Az adatsorok elemeit tartalmazó tömb
 * @returns {void} nem returnol semmivel
 */
function RenderArray(DatArrayFunc) //Függvény ami renderel egy táblázatot, 2
{
    tbody.innerHTML = ''; // kiürítjük a tbody-t, így csak a legfrissebb táblázat lesz ott

    for(const a of DatArrayFunc) //for ciklus ami végigiterál az adatsorokat tartalmazó tömbön, és egy változó ami felveszi a tömbben lévő objektumot
    {
    /**
     * @type {HTMLTableRowElement} Táblázat sor
     */
    const TableDataRowFirst = document.createElement('tr') //Létrehozunk egy táblázatSort
    tbody.appendChild(TableDataRowFirst) //amit hozzáfűzünk a táblázatTörzshöz
    /**
     * @type {HTMLTableCellElement} táblázat sor cella
     */
    const tableDetailF = document.createElement('td') //Létrehozunk egy cellát, ami az adatsor része lesz
    TableDataRowFirst.appendChild(tableDetailF) //hozzáfűzzük a sorhoz
    tableDetailF.innerText = a.Author //A belső szüvege az objektum Szerzője lesz
    /**
     * @type {HTMLTableCellElement} táblázat sor cella
     */
    const tableDetailS = document.createElement('td') //Létrehozunk egy cellát, ami az adatsor része lesz
    TableDataRowFirst.appendChild(tableDetailS) //hozzáfűzzük a sorhoz
    tableDetailS.innerText = a.Creation //A belső szüvege az objektum Műve lesz
    /**
     * @type {HTMLTableCellElement} táblázat sor cella
     */ 
    const tableDetailT = document.createElement('td') //Létrehozunk egy cellát, ami az adatsor része lesz
    TableDataRowFirst.appendChild(tableDetailT) //hozzáfűzzük a sorhoz
    tableDetailT.innerText = a.FirstConcept  //A belső szüvege az objektum Első Fogalma lesz

    if(a.SecondConcept != undefined) //ellenőrzés hogy a második fogalom az meg nem határozott-e, igaz ág
    {
    /**
     * @type {HTMLTableCellElement}  táblázat sor cella
     */        
        const TableDetailFo = document.createElement('td') //Létrehozunk egy cellát, ami az adatsor része lesz
        TableDataRowFirst.appendChild(TableDetailFo) //hozzáfűzzük a sorhoz
        TableDetailFo.innerText = a.SecondConcept //A belső szüvege az objektum második Fogalma lesz
    }
    else //hamis ág
    {
        tableDetailT.colSpan = 2 //mivel nincsen második fogalom elem, ezért az első fogalom Oszlopszélességét átállítjuk 2-re hogy ne legyen üres cella
    }
    }
}
RenderArray(DataArray) //Táblázat renderelés meghívása, a fejléc tömbböt, és az adattömböt tesszük bele

 /**
  * @type {HTMLButtonElement} Button elem, egy gomb
  */
const RendButtonSimple = document.createElement('button') //létrehozzuk a button elemet
document.body.appendChild(RendButtonSimple) //a doksi bodyjához hozzáfűzzük
RendButtonSimple.innerText = 'RenDeredTableButtonSimple' //a gombon belüli szöveget megadjuk

RendButtonSimple.addEventListener('click',function() //a gombhoz hozzáadunk egy evenlistenert, ami akkor történik meg ha rákattintunk
{
    /**
     * @type {AuthorData} object
     */
    const newObject = { //új tömb létrehozása hogy majd hozzáfűzzük a DataArrayhez
        Author: 'SzerzőBlank', //Szerző példaszöveg
        Creation: 'MűBlank', // Mű példaszöveg
        FirstConcept: 'ElsőFogalomBlank' //Első Fogalom példaszöveg
    }
    DataArray.push(newObject) //hozzáfűzzük a DataArrayhez az újdonsült Newobjectünket
    RenderArray(DataArray) //meghívjuk a RenderArray függvényt, megadjuk neki a fejléc, és az adatsorok tömbjét, a táblázatot újra legenerálja
})

 /**
  * @type {HTMLButtonElement} Button elem, egy gomb
  */
const RendButtonDouble = document.createElement('button') //létrehozzuk a button elemet
document.body.appendChild(RendButtonDouble) //a doksi bodyjához hozzáfűzzük
RendButtonDouble.innerText = 'RenDeredTableButtonDouble' //a gombon belüli szöveget megadjuk

RendButtonDouble.addEventListener('click',function() //a gombhoz hozzáadunk egy evenlistenert, ami akkor történik meg ha rákattintunk
{
    /**
     * @type {AuthorData} object
     */
    const newObject = { //új tömb létrehozása hogy majd hozzáfűzzük a DataArrayhez
        Author: 'SzerzőBlank', //Szerző példaszöveg
        Creation: 'MűBlank', // Mű példaszöveg
        FirstConcept: 'ElsőFogalomBlank', //Első Fogalom példaszöveg
        SecondConcept: 'MásodikFogalomBlank' //Második Fogalom példaszöveg
    }
    DataArray.push(newObject) //hozzáfűzzük a DataArrayhez az újdonsült Newobjectünket
    RenderArray(DataArray) //meghívjuk a RenderArray függvényt, megadjuk neki a fejléc, és az adatsorok tömbjét, a táblázatot újra legenerálja
})