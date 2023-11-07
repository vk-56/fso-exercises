import { useEffect, useState } from 'react'
import Numbers from '../components/Numbers'
import Filter from '../components/Filter'
import NumberForm from '../components/NumberForm'
import Notification from '../components/Notification'
import numberService from '../services/number'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)
  
  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => setPersons(initialNumbers))
  }, [errorMessage])
  
  const addEntry = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    const isPresent = persons.find( ({ name }) => name === newName)

    if(isPresent) {
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        numberService
          .update(isPresent.id, personObj)
          .then(updatedPerson => {
            setPersons(persons.map( person => person.id === isPresent.id ? updatedPerson : person))
            setSuccessMessage(
              `Changed ${newName}'s number from ${isPresent.number} to ${updatedPerson.number} `
            )
            setTimeout(() => {
              setSuccessMessage(null)
            }, 4000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${newName} has already been removed from the server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 4000)
            setNewName('')
            setNewNumber('')
          })   
      } else {
        setNewName('')
        setNewNumber('')
      }
    }
    else {
      numberService
        .create(personObj)
        .then(returnedNumber => {
          setPersons(persons.concat(returnedNumber))
          setSuccessMessage(
            `Added ${returnedNumber.name} to Phonebook`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 4000)
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
      <Notification 
        successMessage={successMessage} 
        errorMessage={errorMessage}
        />
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
      <Numbers 
        searchNumbers={searchNumbers} 
        persons={persons}
        setPersons={setPersons}  
      />
    </div>
  )
}

export default App