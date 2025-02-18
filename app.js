const movies = require('./movies.json');

/**
 * this function returns the first 10 movies
 * @returns {Array}
 */
function getFirstTenMovies(){
   return movies.slice(0,9)
}

/**
 * this function returns all movies of a certain genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    return movies.filter(pelicula=>pelicula.genre===genre)
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();