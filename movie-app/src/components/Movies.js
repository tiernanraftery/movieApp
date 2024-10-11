//import from movie item
import MovieItem from "./MovieItem";
import read from "./read"
//import read for the movies
//call the prop
const Movies =(props)=>{
    return props.myMovies.map(
        (Movies)=>{
            //pass in indivual movies
            return<MovieItem myMovie={Movies}/>
        }
    )

}
export default Movies;