
/**
 * @type {{Author:string, Creation:string, Concepts:string}} object ami tartalmazza a header cellák tartalmát
 */
const header =  //a header object elemeit megadjuk
    {
        Author: 'Szerző', // header első cellájának adatát tartalmazza
        Creation: 'Mű', //header második cellájának adatát tartalmazza
        Concepts: 'Fogalmak' //header harmadik cellájának adatát tartalmazza
    }

/**
 * @type {{Author:string,Creation:string,FirstConcept:string,SecondConcept:string}} object ami az első sor adatcelláinak tartalmát tartalmazza
 */
const FirstRow = //a FirstRow object elemeit megadjuk
{
    Author: 'Appolliniare', //első sor 1. cellájának adatát tartalmazza
    Creation: 'A megsebzett galamb és a szökőkút', //első sor 2. cellájának adatát tartalmazza
    FirstConcept: 'képvers', //első sor 3. cellájának adatát tartalmazza
    SecondConcept : 'emlékezés'  //első sor 4. cellájának adatát tartalmazza
}

/**
 * @type {{Author:string,Creation:string, FirstConcept:string}} object ami a második sor adatcelláinak tartalmát tartalmazza
 */
const SecondRow =  //A SecondRow object elemeit megadjuk
{
    Author: 'Apollinaire', //második sor 1. cellájának adatát tartalmazza
    Creation: 'Búcsú', //második sor 2. cellájának adatát tartalmazza
    FirstConcept: 'avantgárd', //második sor 3. cellájának adatát tartalmazza
}

/**
 * @type {{Author:string,Creation:string, FirstConcept:string}} object ami a harmadik sor  adatcelláinak tartalmát tartalmazza
 */
const ThirdRow = //A ThirdRow object elemeit megadjuk
{
    Author: 'Thomas Mann', //harmadik sor 1. cellájának adatát tartalmazza
    Creation: 'Mario és a varázsló', //harmadik sor 2. cellájának adatát tartalmazza
    FirstConcept: 'kisregény', //harmadik sor 3. cellájának adatát tartalmazza
}

/**
 * @type {{Author:string,Creation:string, FirstConcept:string}} object ami a negyedik sor adatcelláinak tartalmát tartalmazza
 */
const FourthRow = //A FourthRow object elemeit megadjuk
{
    Author: 'Franz Kafka', //negyedik sor 1. cellájának adatát tartalmazza
    Creation: 'A per', //negyedik sor 2. cellájának adatát tartalmazza
    FirstConcept: 'regény' //negyedik sor 3. cellájának adatát tartalmazza
}

/**
 * @type {{Author:string,Creation:string,FirstConcept:string,SecondConcept:string}} object ami az ötödik sor adatcelláinak tartalmát tartalmazza
 */
const FinalRow =  //A Finalrow object elemeit megadjuk
{
    Author: 'Franz Kafka', //ötödik sor 1. cellájának adatát tartalmazza
    Creation: 'Az átváltozás', //ötödik sor 2. cellájának adatát tartalmazza
    FirstConcept: 'kisregény', //ötödik sor 3. cellájának adatát tartalmazza
    SecondConcept : 'groteszk' //ötödik sor 4. cellájának adatát tartalmazza
}

console.log(header.Author,'|',header.Creation,'|',header.Concepts,'|','|' ) //a header objectnek három adata meghívásával kiíratjuk a headert
console.log(FirstRow.Author,'|',FirstRow.Creation,'|',FirstRow.FirstConcept,'|',FirstRow.SecondConcept,'|' ) //a FirstRow objectnek a négy adata meghívásával kiíratjuk az első sort
console.log(SecondRow.Author,'|',SecondRow.Creation,'|',SecondRow.FirstConcept,'|','|' ) //a SecondRow objectnek a három adata meghívásával kiíratjuk a második sort
console.log(ThirdRow.Author,'|',ThirdRow.Creation,'|',ThirdRow.FirstConcept,'|','|' ) //a ThirdRow objectnek a három adata meghívásával kiíratjuk a harmadik sort
console.log(FourthRow.Author,'|',FourthRow.Creation,'|',FourthRow.FirstConcept,'|','|' ) //a FourthRow objectnek a három adata meghívásával kiíratjuk a negyedik sort
console.log(FinalRow.Author,'|',FinalRow.Creation,'|',FinalRow.FirstConcept,'|',FinalRow.SecondConcept,'|' ) //a FinalRow objectnek a négy adata meghívásával kiíratjuk az utolsó sort