const MovieItem = (props)=>{
    return(
        <div>
            <h3>
                {props.myMovie.Title}
            </h3>
            <p> {props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}/>

        </div>
    );
}

export default MovieItem;