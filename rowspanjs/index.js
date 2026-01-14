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
 *  ki fogja írni a táblázatot
 * 
 * @param {AuthorDat []} AuthorArray tömb ami tartalmazza a táblázat törzs adatait
 * @returns {void} //nem returnol semmivel
 */
function LogTable(AuthorArray) //függvény, ami kiírja a táblázatot
{
    console.log(headerList[0],'|',headerList[1],'|',headerList[2],'|' ) //tömb használatával kiírjuk a fejlécet
    for(const e of AuthorArray) //végigiterálunk az adattömbön
    {
    /**
     * @type {string} egy változó ami fogja tárolni a sor adatait
     */
    let ContentRow = e.Author +'|'+ e.FirstCreation+'|'+ e.FirstConcept +'|' //a sor adatait beletesszük egy változóba
    if(e.SecondCreation != undefined && e.SecondConcept != undefined ) //ellenőrizzük hogy üresek-e az objekt SecondCreation és SecondConcept mezői
    {
        ContentRow += '\n'+'|_ |' + e.SecondCreation +'|'+ e.SecondConcept +'|' //igazág, egy új sorban hozzátesszük a maradék adatokat
    }
    console.log(ContentRow) //kiírjuk a sor(oka)t
    }
}
LogTable(DataArray) //meghívjuk a függvényt, beletesszük a DataArray tömböt





