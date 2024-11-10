// create.js
//import the use state 
import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const[year, setYear] = useState('');

  // create.js
  //modify create.jc
const handleSubmit = (e) => {
  e.preventDefault();
  
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  
  axios.post('http://localhost:4000/api/movies', movie)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));
};
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