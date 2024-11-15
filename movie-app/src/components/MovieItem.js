import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieItem;