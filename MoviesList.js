import React from 'react';

const MoviesList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div  className='image-container d-flex justify-content-start m-3' >
                 <li key={index}>
					<img  src={movie.Poster}  style={{width:"120px"}}alt='movie'></img>
                    <figcaption>
                   <h2 className="movie__title">{movie.Title}</h2>
                    </figcaption>

                    </li>
                    </div>

             
			))}
		</>
	);
};

export default MoviesList;