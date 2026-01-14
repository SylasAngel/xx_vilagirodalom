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





console.log(headerList[0],'|',headerList[1],'|',headerList[2],'|' ) //tömb használatával kiírjuk a fejlécet
console.log(DataArray[0].Author,'|',DataArray[0].FirstCreation,'|',DataArray[0].FirstConcept,'|' )//a tömb használatával kííratjuk az első sort
console.log("|_",'|',DataArray[0].SecondCreation,'|',DataArray[0].SecondConcept,'|' ) //a tömb segítségével kíírjuk a második sort
console.log(DataArray[1].Author,'|',DataArray[1].FirstCreation,'|',DataArray[1].FirstConcept,'|' ) //a tömb segítségével kíírjuk a harmadik sort
console.log(DataArray[2].Author,'|',DataArray[2].FirstCreation,'|',DataArray[2].FirstConcept,'|' ) //a tömb segítségével kíírjuk a negyedik sort
console.log("|_",'|',DataArray[2].SecondCreation,'|',DataArray[2].SecondConcept,'|' ) //a tömb segítségével kíírjuk az ötödik sort