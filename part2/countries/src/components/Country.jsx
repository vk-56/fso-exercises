import { useState } from "react"

const Country = ({ country }) => {
    const [ label, setLabel ] = useState('show')
    const [ isShow, setIsShow ] = useState(false)

    const toggleShow = () => {
        setIsShow(!isShow)
        label === 'show' ? setLabel('hide') : setLabel('show')
    }

    return (
        <>
            <div>
                {country.name.common}{" "}
                <button 
                    onClick={toggleShow}
                >
                    {label}
                </button>
            </div>
            {isShow ? (
                <>
                    <h1>{country.name.common}</h1>
                    <div>Capital: {country.capital[0]} </div>
                    <div>Area: {country.area} </div>
                    <h2>Languages:</h2>
                    <ul>
                        {Object.values(country.languages)
                            .map( (language) =>
                            <li key={language}>{language}</li>    
                            )
                        }
                    </ul>
                    <br />
                    <img src={country.flags.png} alt={country.flags.alt} />
                </>
            ) : null }
        </>
    )
}

export default Country