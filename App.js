
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviesList from './MoviesList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import MovieListFooter from './MovieListFooter';
const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
 
  const getMovie = async () => {
		const api = `https://www.omdbapi.com/?apikey=45f0782a&s=war`;

		const response = await fetch(api);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  


	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=45f0782a`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
    getMovie(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  />
			</div>
			<div className='row'>
				<MoviesList movies={movies} />
			</div>
      <div className='footer'>
      <MovieListFooter  />
      </div>
		</div>
	);
};

export default App;
