//Read.js

import Movies from "./Movies";
//allows you to add state variables to functional components
import { useEffect, useState } from "react";
//allows you to send asynchronous HTTP requests
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;