import { useEffect, useState } from "react";


/**
 *
 * Countries Data Structure [
 *     {
 *      altSpellings:  ['GS', 'South Georgia and the South Sandwich Islands']
 *      area:3903,
 *      capital:['King Edward Point'],
 *      capitalInfo:{latlng: Array(2)}
 *      car:{signs: Array(1), side: 'right'}
        cca2:"GS"
        cca3:"SGS",
        ccn3:239",
        coatOfArms:{},
        continents:['Antarctica'],
        currencies:{SHP: {…}}
        demonyms:{eng: {…}},
        flag:"🇬🇸"
        flags:{png: 'https://flagcdn.com/w320/gs.png', svg: 'https://flagcdn.com/gs.svg'},
        idd:{root: '+5', suffixes: Array(1)},
        independent:false,
        landlocked:false,
        languages:{eng: 'English'},
        latlng:[-54.5, -37]
        maps:{googleMaps: 'https://goo.gl/maps/mJzdaBwKBbm2B81q9', openStreetMaps: 'https://www.openstreetmap.org/relation/1983629'}
        name:{common: 'South Georgia', official: 'South Georgia and the South Sandwich Islands', nativeName: {…}}
        population:30,
        region:"Antarctic",
        startOfWeek:"monday"
        status:"officially-assigned"
        timezones:['UTC-02:00'],
        tld:['.gs']
        translations:{ara: {…}, bre: {…}, ces: {…}, cym: {…}, deu: {…}, …},
        unMember:false
 *      }
 * ]
 *
 */

export default function CountriesPage(){

    const [countries, setCountries] = useState([])
    async function getCountries(){
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCountries();
    },[])

    return (
        <main>
            <h1>Countries Page</h1>
            {countries.map((country, i)=>(
                <div key={i}>
                    <img src={country.flags.svg} alt={country.name.common}/>
                    <p>{country.name.common}</p>
                </div>
            ))}
        </main>
    )
}