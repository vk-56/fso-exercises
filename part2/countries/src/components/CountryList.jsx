import Country from "./Country"

const CountryList = ({ countries }) => {
    if(countries === null) {
        return null
    }
    else if(countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if(countries.length <= 10 && countries.length > 1)
    {
        return(
            <main>
            {countries.map( (country) => 
                <Country country={country}/>
            )}
            </main>
        )
    }
    else if(countries.length === 1)
    {
        console.log(countries[0])
        return(
            <main>
                <Country country={countries[0]}/>
            </main>
        )
    }
}

export default CountryList;