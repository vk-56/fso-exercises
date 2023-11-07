import numberService from '../services/number'
import '../src/index.css'

const Numbers = ({ searchNumbers, persons, setPersons }) => {
    const deleteEntry = (id, personName) => {
        if(confirm(`Delete ${personName} ?`)) {
            // We have the id inside this function
            numberService
                .deleteNumber(id)
                .then(debugData => {
                    console.log(debugData)
                })
            // Change states
            setPersons(persons.filter( person => person.id !== id))
        }
    }

    return (
        searchNumbers()
        .map( (person) => 
            <div key={person.id} className='entry'>
                {person.name}, {person.number} 
                <button onClick={() => deleteEntry(person.id, person.name)}>Delete</button>
            </div>
        )
    )
}
export default Numbers