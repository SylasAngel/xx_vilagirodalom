
/**
 * @typedef {{Author:string,Creation:string,FirstConcept:string,SecondConcept?:string}} AuthorData típus definíció a táblázat elemeire
 */

/**
 * @type {string []} header elemei
 */
const header = ['Szerző','Mű','Fogalmak'] //header elemei

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
 * függvény ami ki fogja írni az egész táblázatot
 * @param {string[]} headerArr az array amin végigiterálnuk a headerért, fejlécért
 * @param {AuthorData[]} DatArrayFunc az array amin végigiterálunk az adatsorokért
 * @returns {void} nem tér vissza semmilyen értékkel
 */
function LogArray(headerArr,DatArrayFunc) //függvény ami ki fogja írni az egész táblázatot
{
    /**
     * @type {string} a fejléc sora 
     */
    let headRow = headerArr[0]+'|'+headerArr[1]+'|'+ headerArr[2]+'|'+'|' //a megadott HeadArr-nak az adatait megadjuk egy változónak
    console.log(headRow) //kilogoljuk a fejlécet
    for(const e of DatArrayFunc) //végigiterálunk az Arrayen
{
    /**
     * @type {string} változó ami megkapja a sor elemeit
     */
    let Datarow = e.Author+'|'+e.Creation+'|'+ e.FirstConcept+'|' //egy változóba beletesszük a sor első három elemét, az e-ben jelenleg tárolt objektum elemeit
    if (e.SecondConcept != undefined) //megnézzük hogy a második fogalom az undefined-e
    {
        Datarow+= e.SecondConcept +'|' //igaz ág, hozzáadjuk a második fogalmat a sorhoz
    }
    else //hamis ág
    {
        Datarow+= '|' //üres részt hozzáadjuk a sorhoz
    }
    console.log(Datarow) //kiírjuk a sort, ciklus vége, következő ciklus kezdése
}
}

LogArray(header,DataArray) //meghívjuk a LogArray függvényt, megadjuk neki a fejléc, és az adatsorok tömbjét
 /**
  * @type {HTMLButtonElement} Button elem, egy gomb
  */
const button = document.createElement('button') //létrehozzuk a button elemet
document.body.appendChild(button) // //a doksi bodyjához hozzáfűzzük
button.innerText = 'Gomb' //a gombon belüli szöveget megadjuk
button.addEventListener('click',function(){ //a gombhoz hozzáadunk egy evenlistenert, ami akkor történik meg ha rákattintunk
    /**
     * @type {AuthorData} új tömb létrehozása hogy majd hozzáfűzzük a DataArrayhez
     */

    const newObject = { //új tömb létrehozása hogy majd hozzáfűzzük a DataArrayhez
        Author: 'SzerzőBlank', //Szerző példaszöveg
        Creation: 'MűBlank', // Mű példaszöveg
        FirstConcept: 'ElsőFogalomBlank' //Első Fogalom példaszöveg
    }
    DataArray.push(newObject) //hozzáfűzzük a DataArrayhez az újdonsült Newobjectünket
    LogArray(header, DataArray) //meghívjuk a LogArray függvényt, megadjuk neki a fejléc, és az adatsorok tömbjét
})

 /**
  * @type {HTMLButtonElement} Button elem, egy gomb
  */
const doublebutton = document.createElement('button') //létrehozzuk a button elemet
document.body.appendChild(doublebutton) // //a doksi bodyjához hozzáfűzzük
doublebutton.innerText = 'duplaGomb' //a gombon belüli szöveget megadjuk
doublebutton.addEventListener('click',function(){ //a gombhoz hozzáadunk egy evenlistenert, ami akkor történik meg ha rákattintunk

    console.log('-------------------------------------------------------------------------------') //elválasztó vonal, könnyebben láthatóak az új táblázatok
    /**
     * @type {AuthorData} //új tömb létrehozása hogy majd hozzáfűzzük a DataArrayhez
     */
    const newObject = { //új tömb létrehozása hogy majd hozzáfűzzük a DataArrayhez
        Author: 'SzerzőBlank', //Szerző példaszöveg
        Creation: 'MűBlank', // Mű példaszöveg
        FirstConcept: 'ElsőFogalomBlank', //Első Fogalom példaszöveg
        SecondConcept: 'MásodikFogalomBlank' //Második Fogalom példaszöveg
    }
    DataArray.push(newObject) //hozzáfűzzük a DataArrayhez az újdonsült Newobjectünket
    LogArray(header, DataArray) //meghívjuk a LogArray függvényt, megadjuk neki a fejléc, és az adatsorok tömbjét
})