import React, { useState } from 'react';

function MoviesList() {

    const [movies] = useState([
        {title: 'A walk to remember', description: 'it follows the story of Landon and Jamie, two high school students from different worlds who find themselves drawn to each other. As they navigate the challenges of their relationship, they discover the true meaning of love and the importance of making every moment count.'},
        {title: 'The choice', description: 'tells the story of Travis Parker and Gabby Holland, two individuals from different worlds, who find themselves drawn to each other in a small coastal town in North Carolina.'},
        {title: 'Me before you', description: 'In Me Before You by Jojo Moyes, we are introduced to Louisa Clark, a young woman who loses her job at a local cafe and is forced to take up a position as a caregiver for Will Traynor, a wealthy, successful, and adventurous man who has been left paralyzed from the neck down after a tragic accident.'},
        {title: 'Pride and prejudice', description: 'follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.'}
    ]);

    const [showMovies, setShowMovies] = useState(false);



    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                <li key={index} className='movieTitle' onClick={() => setShowMovies({ 
                    showMovies, [index]: !showMovies[index] 
                })}>
                    {movie.title}
                    {showMovies[index] && <p>{movie.description}</p>}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesList;
