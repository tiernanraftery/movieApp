// create.js
//import the use state 
import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const[year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }
  // return all values in the handle submit 
  return (
    <div>
        {/*created  */}
      <h2>Welcome to my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          </div>
          
          <div className ="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
          </div>
          <input type="submit" value="Add Year" />
        
      
        

      </form>
    </div>
  );
}

export default Create;