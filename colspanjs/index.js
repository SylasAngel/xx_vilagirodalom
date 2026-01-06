console.log('Szerző        | Mű                                | Fogalmak |          | ')  //kíírjuk a táblázat headjet ahol van egy üres cella
console.log('Apollinaire   | A megsebzett galamb és a szökőkút | képvers  | emlékezés| ')  //kíírjuk a táblázat legelső adatsorát anu teljes
console.log('Apollinaire   | Búcsú                             | avantgárd|          | ')  //kíírjuk a táblázat 2. adatsorát ahol van üres cella
console.log('Thomas Mann   | Mario és a varázsló               | kisregény|          | ')  //kíírjuk a táblázat 3. adatsorát ahol van üres cella
console.log('Franz Kafka   | A per                             | regény   |          | ')  //kíírjuk a táblázat 4. adatsorát ahol van üres cella
console.log('Franz Kafka   | Az átváltozás                     | kisregény| groteszk | ')  //kíírjuk a táblázat 5. adatsorát ami teljes

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
 * @type {string} első sor 1. eleme
 */
const ftdAuthor = 'Apollinaire ' //első sor 1. elemét eltároljuk egy változóba
/**
 * @type {string} első sor 2. eleme
 */
const ftdCreation = 'A megsebzett galamb és a szökőkút' //első sor 2. elemét eltároljuk egy változóba
/**
 * @type {string} első sor 3. eleme
 */
const ftdFirstConcept = 'képvers ' //első sor 3. elemét eltároljuk egy változóba
/**
 * @type {string} első sor 4. eleme
 */
const ftdSecondConcept = 'emlékezés' //első sor 4. elemét eltároljuk egy változóba

/**
 * @type {string} második sor 1. eleme
 */
const stdAuthor = 'Apollinaire' //második sor 1. elemét eltároljuk egy változóba
/**
 * @type {string} második sor 2. eleme
 */
const stdCreation = 'Búcsú ' //második sor 2. elemét eltároljuk egy változóba
/**
 * @type {string} második sor 3. eleme
 */
const stdFirstConcept = 'avantgárd' //második sor 3. elemét eltároljuk egy változóba

/**
 * @type {string} harmadik sor 1. eleme
 */
const ttdAuthor = 'Thomas Mann' //harmadik sor 1. elemét eltároljuk egy váltotóba
/**
 * @type {string} harmadik sor 2. eleme
 */
const ttdCreation = 'Mario és a varázsló ' //harmadik sor 2. elemét eltároljuk egy váltotóba
/**
 * @type {string} harmadik sor 3. eleme
 */
const ttdFirstConcept = 'kisregény' //harmadik sor 3. elemét eltároljuk egy váltotóba

/**
 * @type {string} negyedik sor 1. eleme
 */
const fottdAuthor = 'Franz Kafka ' //negyedik sor 1. elemét eltároljuk egy változóba
/**
 * @type {string} negyedik sor 2. eleme
 */
const fottdCreation = 'A per' //negyedik sor 2. elemét eltároljuk egy változóba
/**
 * @type {string} negyedik sor 3. eleme
 */
const fottdFirstConcept = 'regény' //negyedik sor 3. elemét eltároljuk egy változóba

/**
 * @type {string} ötödik sor 1. eleme
 */
const fittdAuthor = 'Franz Kafka' //ötödik sor 1. elemét eltároljuk egy változóba
/**
 * @type {string} ötödik sor 2. eleme
 */
const fittdCreation = 'Az átváltozás ' //ötödik sor 2. elemét eltároljuk egy változóba
/**
 * @type {string} ötödik sor 3. eleme
 */
const fittdFirstConcept = 'kisregény' //ötödik sor 3. elemét eltároljuk egy változóba
/**
 * @type {string} ötödik sor 4. eleme
 */
const fittdSecondConcept = 'groteszk' //ötödik sor 4. elemét eltároljuk egy változóba

console.log(headAuthor,'|',headCreation,'|',headConcept,'|','|' ) //a változók használatával kííratjuk a headet, ahol hagyunk egy üres helyet
console.log(ftdAuthor,'|',ftdCreation,'|',ftdFirstConcept,'|',ftdSecondConcept,'|' )//a változók használatával kííratjuk az első sort
console.log(stdAuthor,'|',stdCreation,'|',stdFirstConcept,'|','|' ) //a változók segítségével kíírjuk a második sort, ahol hagyunk egy üres helyet
console.log(ttdAuthor,'|',ttdCreation,'|',ttdFirstConcept,'|','|' ) //a változók segítségével kíírjuk a harmadik sort, ahol hagyunk egy üres helyet
console.log(fottdAuthor,'|',fottdCreation,'|',fottdFirstConcept,'|','|' ) //a változók segítségével kíírjuk a negyedik sort, ahol hagyunk egy üres helyet
console.log(fittdAuthor,'|',fittdCreation,'|',fittdFirstConcept,'|',fittdSecondConcept,'|' ) // a változók segítségével kíírjuk az ötödik sort

/**
 * @type {Author:string, Creation:string, Concepts:string} object ami tartalmazza a header cellák tartalmát
 */
const header =  //a header object elemeit megadjuk
    {
        Author: 'Szerző', // header első cellájának adatát tartalmazza
        Creation: 'Mű', //header második cellájának adatát tartalmazza
        Concepts: 'Fogalmak' //header harmadik cellájának adatát tartalmazza
    }

/**
 * @type {Author:string,Creation:string,FirstConcept:string,SecondConcept:string} object ami az első sor adatcelláinak tartalmát tartalmazza
 */
const FirstRow = //a FirstRow object elemeit megadjuk
{
    Author: 'Appolliniare', //első sor 1. cellájának adatát tartalmazza
    Creation: 'A megsebzett galamb és a szökőkút', //első sor 2. cellájának adatát tartalmazza
    FirstConcept: 'képvers', //első sor 3. cellájának adatát tartalmazza
    SecondConcept : 'emlékezés'  //első sor 4. cellájának adatát tartalmazza
}

/**
 * @type {Author:string,Creation:string, FirstConcept:string} object ami a második sor adatcelláinak tartalmát tartalmazza
 */
const SecondRow =  //A SecondRow object elemeit megadjuk
{
    Author: 'Apollinaire', //második sor 1. cellájának adatát tartalmazza
    Creation: 'Búcsú', //második sor 2. cellájának adatát tartalmazza
    FirstConcept: 'avantgárd', //második sor 3. cellájának adatát tartalmazza
}

/**
 * @type {Author:string,Creation:string, FirstConcept:string} object ami a harmadik sor  adatcelláinak tartalmát tartalmazza
 */
const ThirdRow = //A ThirdRow object elemeit megadjuk
{
    Author: 'Thomas Mann', //harmadik sor 1. cellájának adatát tartalmazza
    Creation: 'Mario és a varázsló', //harmadik sor 2. cellájának adatát tartalmazza
    FirstConcept: 'kisregény', //harmadik sor 3. cellájának adatát tartalmazza
}

/**
 * @type {Author:string,Creation:string, FirstConcept:string} object ami a negyedik sor adatcelláinak tartalmát tartalmazza
 */
const FourthRow = //A FourthRow object elemeit megadjuk
{
    Author: 'Franz Kafka', //negyedik sor 1. cellájának adatát tartalmazza
    Creation: 'A per', //negyedik sor 2. cellájának adatát tartalmazza
    FirstConcept: 'regény' //negyedik sor 3. cellájának adatát tartalmazza
}

/**
 * @type {Author:string,Creation:string,FirstConcept:string,SecondConcept:string} object ami az ötödik sor adatcelláinak tartalmát tartalmazza
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

