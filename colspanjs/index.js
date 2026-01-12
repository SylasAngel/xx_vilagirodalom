

/**
 * @type {string []} header elemei 
 */
const header = ['Szerző','Mű','Fogalmak'] //header elemei

/**
 * @type {{Author:string,Creation:string,FirstConcept:string,SecondConcept?:string}[]} Array elemei, ahol SecondConcept nem biztos hogy van
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

console.log(header[0]+'|'+header[1]+'|'+header[2]+'|'+'|') //kiíratjuk a headert
for(const e of DataArray) //végigiterálunk a DataArray Arrayen
{
    /**
     * @type {string} változó ami megkapja a sor elemeit
     */
    let row = e.Author+'|'+e.Creation+'|' //egy változóba beletesszük a sor első kettő elemét, az e-ben jelenleg tárolt objektum elemeit
    if (e.SecondConcept != undefined) //megnézzük hogy a második fogalom az undefined-e
    {
        row+= e.FirstConcept+'|'+ e.SecondConcept +'|' //igaz ág, hozzáadjuk az első és a második fogalmat a sorhoz
    }
    else //hamis ág
    {
        row+= e.FirstConcept+ '|'+'|' //hozzáadjuk az első fogalmaz, és az üres helyet
    }
    console.log(row) //kiírjuk a sort, ciklus vége, következő ciklus kezdése
}