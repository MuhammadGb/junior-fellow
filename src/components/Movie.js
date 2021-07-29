import React, {useState, useEffect} from 'react';

export default function Movie() {

    //const fetchMovies = fetch("http://www.omdbapi.com/?apikey=df7a2100&");

    const fetchMovies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=df7a2100")
        .then(res => {await res.json()});
}