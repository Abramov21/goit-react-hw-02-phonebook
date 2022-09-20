
const Filter = ({ value, onChange }) => {
  return (
    <div >
      <h1 >Contacts:</h1>
      <label >
        Find contacts by name:
        <input type="text" name="name" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
