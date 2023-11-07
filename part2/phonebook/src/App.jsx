import { useEffect, useState } from 'react'
import Numbers from '../components/Numbers'
import Filter from '../components/Filter'
import NumberForm from '../components/NumberForm'
import numberService from '../services/number'

const App = () => {
  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => setPersons(initialNumbers))
  }, [])

  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    const isPresent = persons.find( ({ name }) => name === newName)

    if(isPresent) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      numberService
        .create(personObj)
        .then(returnedNumber => {
          setPersons(persons.concat(returnedNumber))
          setNewName('')
          setNewNumber('')
        })
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