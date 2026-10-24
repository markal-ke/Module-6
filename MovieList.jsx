import { useState } from 'react';
import AddMovieForm from './AddMovieForm';

function MoviesList() {
  // collection of objects representing movies
const movies = [
{
id: 1, // items in data collections need unique IDs
title: "The Shawshank Redemption",
year: 1994,
synopsis: "Two imprisoned men find redemption.",
},

{
id: 2, // unique ID
title: "The Dark Knight",
year: 2008,
synopsis: "Batman fights the menace known as the Joker.",
},

{
id: 3, // unique ID
title: "Interstellar",
year: 2014,
synopsis: "Explorers travel through a wormhole in space.",
},

];
const [currentMovies, setCurrentMovies] = useState(movies);

const handleReverseMovies = () => {
// first clone the original, so we don’t mutate it
let newMovies = [...currentMovies];
newMovies.reverse(); 
setCurrentMovies(newMovies); 
}

const handleSortMovies = () => {
// first clone the original, so we don’t mutate it
let newMovies = [...currentMovies];
newMovies.sort(); 
setCurrentMovies(newMovies); 
}

const handleMovieDelete = () => {
let idToDelete = 2;
let newMovies = currentMovies.filter(movie => movie.id != idToDelete);
setCurrentMovies(newMovies); 
}

const movieItems = currentMovies.map(movie => (
<Movie
key={movie.id} // key prop is required for lists
title={movie.title}
year={movie.year}
synopsis={movie.synopsis}/>
// can also destructure movie into individual props
// <Movie key={movie.id} {...movie}/>
)
);
// separate component for displaying each movie

function Movie({title, year, synopsis}) {
return (
         < li >
        <h3>{title}</h3> <span>({year})</span>
        <div>{synopsis}</div> 
        </li >
    );
}

// add this in MoviesList component
const handleAddMovie = (newMovie) => { newMovie.id = currentMovies.length + 1; // unreliable but succinct
setCurrentMovies([...currentMovies, newMovie])
}


return (
<div className="MoviesList">
<ul>
{ movieItems }
</ul>
<button onClick={handleReverseMovies}>Reverse List</button>
<button onClick={handleSortMovies}>Sort List</button>
<button onClick={handleMovieDelete}> Delete </button>
<AddMovieForm onAddMovie={handleAddMovie}/>
</div>
)
}
export default MoviesList;
