const Filter = ({ name, setName }) =>
    <>
      <h2>Filter Numbers</h2>
      <div>
        Filter show with:
        <input 
            value={name}
            onChange={(event) => setName(event.target.value)}
        /> 
      </div>
    </>

export default Filter