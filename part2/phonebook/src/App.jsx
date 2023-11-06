import { useEffect, useState } from 'react'
import Axios from 'axios'
import Numbers from '../components/Numbers'
import Filter from '../components/Filter'
import NumberForm from '../components/NumberForm'

const App = () => {
  useEffect(() => {
    console.log('fetching data')
    Axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
      id: Math.max(...persons.map( (person) => person.id )) + 1
    }

    const isPresent = persons.find( ({ name }) => name === newName)

    if(isPresent) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }

  const searchNumbers = () => {
    return persons.filter( 
      (person) => person.name.toLowerCase().includes(filterName.toLowerCase())
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter name={filterName} setName={setFilterName} />
      <h2>Add a New Number</h2>
      <NumberForm 
        addEntry={addEntry}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Numbers searchNumbers={searchNumbers} />
    </div>
  )
}

export default App