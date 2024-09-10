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
        <main className="max-w-5xl mx-auto">
            <section className="grid grid-cols-4 gap-8">
                {countries.map((country, i)=>(
                    <div className="shadow-md rounded-lg bg-white" key={i}>
                        <div className="h-32">
                            <img className="object-cover rounded-t-lg w-full h-32" src={country.flags.svg} alt={country.name.common}/>
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-bold mb-4">{country.name.common}</p>
                            <p className="font-normal"><span className="font-medium">Population</span> : {country.population}</p>
                            <p className="font-normal"><span className="font-medium">Region</span> : {country.region}</p>
                            <p className="font-normal"><span className="font-medium">Capital</span> : {country.capital ? country.capital[0] :"N/A"}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}