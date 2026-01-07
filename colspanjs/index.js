
/**
 * @type {Author:string,Creation:string,FirstConcept:string,SecondConcept?:string} Array elemei, ahol SecondConcept nem biztos hogy van
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
 * @type {Title:string,colSpan:colSpan} header elemei
 */
const header =  [ //fejléc objektum
{ //header elemei
    Title: 'Szerző' //Szerző
},
{
    Title: 'Mű' //Mű
},
{
    Title: 'Fogalmak', //Fogalmak
    colSpan: 2 //oszlopszélesség 2
}
]

    /**
     * @type {HTMLTableElement} Táblázat 
     */
    const table = document.createElement('table') //Létrehozunk egy táblázat elementet
    document.body.appendChild(table) //Hozzáfűzzük a doksi Bodyjához

    /**
     * @type {HTMLTableElement} thead
     */
    const thead = document.createElement('thead') //fejlécet létrehozunk
    table.appendChild(thead) //hozzáfűzzük a táblázathoz

    /**
     * @type {HTMLTableElement} TáblázatTörzs
     */
    const tbody = document.createElement('tbody') //Létrehozunk egy táblázat törzs elemet
    table.appendChild(tbody) //amit hozzáfűzünk a táblázathoz


/**
 * a fejlécet fogja renderelni
 * @param {object} headerArr fejléc szöveget tartalmazó tömb
 * @param {HTMLTableElement} tHead a fejléc amihez fűzzük
 * @returns {void} nem tér vissza semmivel
 */
function renderHeader(headerArr,tHead) //függvény ami a fejlécet rendereli
{
    /**
     * @type {HTMLTableRowElement} egy sor amihez fűzzük a cellákat
     */
    const TableHeaderRow = document.createElement('tr') //Létrehozunk egy sort
    tHead.appendChild(TableHeaderRow) //hozzáfűzzük a fejléchez a sort
    for(let i = 0; i<headerArr.length;i++) //for ciklus, végigmegy 0-tól a headerarr tömb hosszúságáigm így az indexekkel meg tudjuk kapni az objektum értékét
    {
        /**
         * @type {HTMLTableCellElement} cella amit majd hozzáfűzünk a fejléchez
         */
        const TableHeadCell = document.createElement('th') //létrehozunk egy fejléc cellát
        TableHeaderRow.appendChild(TableHeadCell) //hozzáfűzzük a sorhoz
        TableHeadCell.innerText = headerArr[i].Title //a fejléc cella szövege a jelenlegi indexen lévő tömb elemének a Title értéke lesz
        if(headerArr[i].colSpan == 2) //leellenőrizzük hogy a tömb jelenlegi objektumának a colspan értéke 2-e, igazág
        {
            TableHeadCell.colSpan = 2 //a cellának az oszlopszélességét beállítjuk 2-re
        }
    }
}
renderHeader(header,thead) //meghívjuk a függvényt, rendereljük a fejlécet

/**
 * rendereli a táblázat törzset
 * @param {object} Array tömb ami tartalmazza az adatokat az adatsorokhoz
 * @returns {void} nem tér vissza semmivel
 */
function RenderArray(Array) //Függvény ami renderel egy táblázatot, 2
{
    tbody.innerHTML = '' //töröljük a táblázattörzsben lévő adatokat, hogy ne legyen több táblázat, hanem a táblázat ki legyen cserélve az újabb verzióra
    for(const a of Array) //for ciklus ami végigiterál az adatsorokat tartalmazó tömbön, és egy változó ami felveszi a tömbben lévő objektumot
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
  * @type {string} Button elem, egy gomb
  */
const RendButtonSimple = document.createElement('button') //létrehozzuk a button elemet
document.body.appendChild(RendButtonSimple) //a doksi bodyjához hozzáfűzzük
RendButtonSimple.innerText = 'RenDeredTableButtonSimple' //a gombon belüli szöveget megadjuk

RendButtonSimple.addEventListener('click',function() //a gombhoz hozzáadunk egy evenlistenert, ami akkor történik meg ha rákattintunk
{
    /**
     * @type {object} tömb
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
  * @type {string} Button elem, egy gomb
  */
const RendButtonDouble = document.createElement('button') //létrehozzuk a button elemet
document.body.appendChild(RendButtonDouble) //a doksi bodyjához hozzáfűzzük
RendButtonDouble.innerText = 'RenDeredTableButtonDouble' //a gombon belüli szöveget megadjuk

RendButtonDouble.addEventListener('click',function() //a gombhoz hozzáadunk egy evenlistenert, ami akkor történik meg ha rákattintunk
{
    /**
     * @type {object} tömb
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








