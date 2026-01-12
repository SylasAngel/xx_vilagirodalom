/**
 * @type {string []} szöveg tömb fejléc elemei
 */
const header = ['Szerző','Mű','Fogalmak'] //fejléc elemei

/**
 * @type {{Author:string,Creation:string,FirstConcept:string,SecondConcept?:string} []} adatsorok elemei
 */
const DataArray = [ //adattömb
    {
        Author: 'Appollinaire', //adatsor szerzője
        Creation: 'A megsebzett galamb és a szökőkút', //adatsor műve
        FirstConcept: 'képvers', //adatsor első fogalma
        SecondConcept: 'emlékezés' //adatsor második fogalma
    },
    {
        Author: 'Apollinaire',//adatsor szerzője
        Creation: 'Búcsú',//adatsor műve
        FirstConcept: 'avantgárd',//adatsor első fogalma
    },
    {
        Author: 'Thomas Mann',//adatsor szerzője
        Creation: 'Mario és a varázsló',//adatsor műve
        FirstConcept: 'kisregény',//adatsor első fogalma
    },
    {
        Author: 'Franz Kafka',//adatsor szerzője
        Creation: 'A per',//adatsor műve
        FirstConcept: 'regény',//adatsor első fogalma
    },
    {
        Author: 'Franz Kafka',//adatsor szerzője
        Creation: 'Az átvlátozás',//adatsor műve
        FirstConcept: 'kisregény',//adatsor első fogalma
        SecondConcept: 'groteszk'//adatsor második fogalma
    }
]

console.log(header[0],'|',header[1],'|',header[2],'|','|') //fejléc kiíratása
console.log(DataArray[0].Author,'|',DataArray[0].Creation,'|',DataArray[0].FirstConcept,'|',DataArray[0].SecondConcept,'|') //első adatsor kiíratása
console.log(DataArray[1].Author,'|',DataArray[1].Creation,'|',DataArray[1].FirstConcept,'|','|') //második adatsor kiíratása
console.log(DataArray[2].Author,'|',DataArray[2].Creation,'|',DataArray[2].FirstConcept,'|','|') //harmadik adatsor kiíratása
console.log(DataArray[3].Author,'|',DataArray[3].Creation,'|',DataArray[3].FirstConcept,'|','|') //negyedik adatsor kiíratása
console.log(DataArray[4].Author,'|',DataArray[4].Creation,'|',DataArray[4].FirstConcept,'|',DataArray[4].SecondConcept,'|') //ötödik adatsor kiíratása