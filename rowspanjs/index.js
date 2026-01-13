/**
 * @typedef {{Author:string,Creation:string,Concept:string}} AuthorDat típusdefiníció az adatsorokhoz
 */

/**
 * @type {string} Head legelső eleme
 */
const headAuthor = 'Szerző' //head legelső elemét eltároljuk egy változóba
/**
 * @type {string} Head második eleme
 */
const headCreation =  'Mű ' //Head második elemét eltároljuk egy változóba
/**
 * @type {string} Head harmadik eleme
 */
const headConcept = 'Fogalmak' //head harmadik elemét eltároljuk egy változóba

/**
 * @type {AuthorDat} adatsor a táblázathoz
 */
const FirstRow = { //objektum létrehozás
    Author: 'Appolliniare', //első sor szerző adata
    Creation: 'A megsebzett galamb és a szökőkút', //első sor mű adata
    Concept: 'képvers' //első sor fogalom adata
}
/**
 * @type {AuthorDat} adatsor a táblázathoz
 */
const SecondRow = { //objektum létrehozás
    Author: 'Appolliniare', //második sor szerző adata
    Creation: 'Búcsú', //második sor mű adata
    Concept: 'avantgárd' //másodiksor fogalom adata
}
/**
 * @type {AuthorDat} adatsor a táblázathoz
 */
const ThirdRow = { //objektum létrehozás
    Author: 'Thomas Mann', //harmadik sor szerző adata
    Creation: 'Mario és a varázsló', //harmadik sor mű adata
    Concept: 'kisregény' //harmadik sor fogalom adata
}
/**
 * @type {AuthorDat} adatsor a táblázathoz
 */
const FourthRow = { //objektum létrehozás
    Author: 'Franz Kafka', //negyedik sor szerző adata
    Creation: 'A per', //negyedik sor mű adata
    Concept: 'regény' //negyediksor fogalom adata
}
/**
 * @type {AuthorDat} adatsor a táblázathoz
 */
const FifthRow = { //objektum létrehozás
    Author: 'Franz Kafka', //ötödik sor szerző adata
    Creation: 'Az átvlátozás', //ötödik sor mű adata
    Concept: 'kisregény' //ötödik sor fogalom adata   
}


console.log(headAuthor,'|',headCreation,'|',headConcept,'|' ) //a változók használatával kííratjuk a headet
console.log(FirstRow.Author,'|',FirstRow.Creation,'|',FirstRow.Concept,'|' )//a változók használatával kííratjuk az első sort
console.log(SecondRow.Author,'|',SecondRow.Creation,'|',SecondRow.Concept,'|' ) //a változók segítségével kíírjuk a második sort
console.log(ThirdRow.Author,'|',ThirdRow.Creation,'|',ThirdRow.Concept,'|' ) //a változók segítségével kíírjuk a harmadik sort
console.log(FourthRow.Author,'|',FourthRow.Creation,'|',FourthRow.Concept,'|' ) //a változók segítségével kíírjuk a negyedik sort
console.log(FifthRow.Author,'|',FifthRow.Creation,'|',FifthRow.Concept,'|' ) // a változók segítségével kíírjuk az ötödik sort