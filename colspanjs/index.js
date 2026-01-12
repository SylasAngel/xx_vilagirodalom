


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
/**
 * @type {string} első sor
 */
let FirstRow = DataArray[0].Author+'|'+ DataArray[0].Creation+'|'+DataArray[0].FirstConcept+'|' //Első sor 
if(DataArray[0].SecondConcept != undefined) //leellenőrizzük hogy a secondConcept nem undefined-e
{
    FirstRow+= DataArray[0].SecondConcept+ '|' //hozzáadjuk az első sorhoz a második fogalmat, igaz ág
}
else //else ág, hamis ág, ha a SecondConceptbe nincs semmi
{
    FirstRow+= '|' // hozzáfűzzük az első sorhoz az üres mezőt
}

/**
 * @type {string} második sor
 */
let SecondRow = DataArray[1].Author+'|'+ DataArray[1].Creation+'|'+DataArray[1].FirstConcept+'|' //leellenőrizzük hogy a secondConcept nem undefined, e
if(DataArray[1].SecondConcept != undefined) //leellenőrizzük hogy a secondConcept nem undefined-e
{
    FirstRow+= DataArray[1].SecondConcept+'|'//hozzáadjuk az első sorhoz a második fogalmat, igaz ág

}
else //else ág, hamis ág, ha a SecondConceptbe nincs semmi
{
    SecondRow+= '|' // hozzáfűzzük a második sorhoz az üres mezőt
}

/**
 * @type {string} harmadik sor
 */
let ThirdRow = DataArray[2].Author+'|'+ DataArray[2].Creation+'|'+DataArray[2].FirstConcept+'|' //leellenőrizzük hogy a secondConcept nem undefined, e
if(DataArray[2].SecondConcept != undefined) //leellenőrizzük hogy a secondConcept nem undefined-e
{
    ThirdRowRow+= DataArray[2].SecondConcept+'|' //hozzáadjuk az első sorhoz a második fogalmat, igaz ág

}
else //else ág, hamis ág, ha a SecondConceptbe nincs semmi
{
    ThirdRow+= '|' // hozzáfűzzük a harmadik sorhoz az üres mezőt
}

/**
 * @type {string} negyedik sor
 */
let FourthRow = DataArray[3].Author+'|'+ DataArray[3].Creation+'|'+DataArray[3].FirstConcept+'|' //leellenőrizzük hogy a secondConcept nem undefined, e
if(DataArray[3].SecondConcept != undefined) //leellenőrizzük hogy a secondConcept nem undefined-e
{
    FourthRow= DataArray[3].SecondConcept+'|' //hozzáadjuk az első sorhoz a második fogalmat, igaz ág
}
else //else ág, hamis ág, ha a SecondConceptbe nincs semmi
{
  FourthRow+= '|' // hozzáfűzzük a negyedik sorhoz az üres mezőt
}

/**
 * @type {string} ötödik sor
 */ 
let FifthRow = DataArray[4].Author+'|'+ DataArray[4].Creation+'|'+DataArray[4].FirstConcept+'|' //leellenőrizzük hogy a secondConcept nem undefined, e
if(DataArray[4].SecondConcept != undefined) //leellenőrizzük hogy a secondConcept nem undefined-e
{
    FifthRow+= DataArray[4].SecondConcept+'|' //hozzáadjuk az első sorhoz a második fogalmat, igaz ág
}
else //else ág, hamis ág, ha a SecondConceptbe nincs semmi
{
    FifthRow+= '|' // hozzáfűzzük az ötödik sorhoz az üres mezőt
}

console.log(header[0]+'|'+header[1]+'|'+header[2]+'|'+'|') //kiíratjuk a headert
console.log(FirstRow) //kiratjuk az első sort
console.log(SecondRow) //kiíratjuk a második sort
console.log(ThirdRow) //kiíratjuk a harmadik sort
console.log(FourthRow) //kiíratjuk a negyedik sort
console.log(FifthRow) //kiíratjuk az ötödik sort
