const NumberForm = ({ addEntry, newName, setNewName, newNumber, setNewNumber }) =>
    <form onSubmit={addEntry}>
      <div>
        Enter a name: 
        <input 
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div>
        Enter their number: 
        <input 
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">
          Add
        </button>
      </div>
    </form>

export default NumberForm
