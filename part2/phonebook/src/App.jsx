import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          Enter a name: 
          <input 
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( (person) => <div key={person.name}>{person.name}</div>)}    
    </div>
  )
}

export default App