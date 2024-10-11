import read from "./read"
//import read for the movies
//call the prop
const Movies =(props)=>{
    return(
        <div>
            my movies component
            {console.log(props.myMovies)}
        </div>
    );

}
export default Movies;