import React, {useState, useEffect} from 'react';

export default function Movie() {

    const [movies, setMovies] = useState([]);

    //const fetchMovies = fetch("http://www.omdbapi.com/?apikey=df7a2100&");

    const fetchMovies = () => {
        fetch("http://www.omdbapi.com/?s=batman&page=2&apikey=df7a2100")
            .then(res => res.json())
            .then(res =>  {
                setMovies(res.Search);
                console.log(res.Search);
            });
    };
    useEffect(() => {
        fetchMovies();
    }, [])

    return(
        <div></div>
    )
}