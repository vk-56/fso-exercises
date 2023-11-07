import { useState, useEffect } from "react"
import Axios from "axios"
import CountryList from "./components/CountryList"

const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries ] = useState(null)

  useEffect(() => {
    Axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountries(response.data.filter( (country) =>
        country.name.common.toLowerCase()
          .includes(filter.toLowerCase())
      ))
    })
  }, [filter])

  return (
    <>
      <h1>Find Countries</h1>
      <div>
        Filter countries with:{" "}
        <input 
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <CountryList
        countries={countries}
      />
    </>
  )
}

export default App
