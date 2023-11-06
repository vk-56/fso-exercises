import { useState } from 'react'
import Numbers from '../components/Numbers'
import Filter from '../components/Filter'
import NumberForm from '../components/NumberForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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