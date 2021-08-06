import React, {useState, useEffect} from 'react';
import Banner from './Banner';
import { Text } from '@chakra-ui/react';

const styles = ({
    title: {
        fontSize: "24px",
        fontFamily: "Dm Sans",
        color: "#FFFFFF",
        textAlign: "center",
        position: "absolute",
        whiteSpace: "wrap",
        width: "295px",
        "&:hover": {
            background: "blue",
        }
    },
    movies: {
        display: "flex",
        flexDirection: "column",
        margin: "0px 0px 67px 77px",
        width: "96%",
    },
    cover: {
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 13px 97px 0px",
        borderRadius: "12px",
        cursor: "pointer",
    },
    section: {
        display: "flex",
        flexFlow: "row wrap",
        width: "100%",
    },
    imagePoster: {
        width: "100%",
        height: "100%",
        background: "#000000",
        borderRadius: "12px"
    },
})

export default function Movie() {

    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState("Creed");

    const moviesList = [];
    const fetchMovies = async(page=1) => {
        while(page<4 ){
            const data = await fetch(`http://www.omdbapi.com/?s=${searchMovies}&page=${page}&apikey=df7a2100`);
            const res = await data.json();
            //console.log(res);
            res.Search.forEach(movie => moviesList.push(movie))
            page++;
        }
        setMovies(moviesList)
        console.log(movies);
    };

    const movie = movies.filter(movie => movie.Type === "movie");
    const series = movies.filter(movie => movie.Type === "series");
    const game = movies.filter(movie => movie.Type === "game");

    const handleChange = (e) => {
        setSearchMovies(e.target.value);
    }
    useEffect(() => {
        const timeOutId = setTimeout(() => fetchMovies(), 2500);
        return () => clearTimeout(timeOutId);   
    }, [movies]);

    return(
        <div>
            <Banner test={"1"} defaultValue={searchMovies} handleChange={handleChange}/>
            <div style={styles.movies}>
                <Text 
                    sx={{
                        fontSize: "24px",
                        fontFamily: "Dm Sans",
                        maxWidth: "250px",
                        color: "#000000",
                        "&:hover": {
                            textDecoration: "underline",
                            textDecorationColor: "#0CAFFF",
                        }
                    }}
                    >Movies</Text>
                <div style={styles.section}>
                    {movie.map(mov => (
                        <div style={styles.cover} key={mov.imdbID}>
                            <img style={styles.imagePoster} 
                                src={mov.Poster === 'N/A' ? 'https://placehold.it/198x264&text=No+Image' : mov.Poster}
                                alt={mov.Title}
                            />
                            <Text
                                sx={{
                                    fontSize: "24px",
                                    fontFamily: "Dm Sans",
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    position: "absolute",
                                    whiteSpace: "wrap",
                                    width: "295px",
                                    "&:hover": {
                                        textDecoration: "underline",
                                        textDecorationColor: "#0CAFFF",
                                    }
                                  }}
                            >{mov.Title}</Text>
                        </div>
                    ))}
                </div>
                <Text 
                    sx={{
                        fontSize: "24px",
                        fontFamily: "Dm Sans",
                        maxWidth: "250px",
                        color: "#000000",
                        "&:hover": {
                            textDecoration: "underline",
                            textDecorationColor: "#0CAFFF",
                        }
                    }}
                >Series</Text>
                <div style={styles.section}>
                    {series.map(s => (
                        <div style={styles.cover} key={s.imdbID}>
                            <img style={styles.imagePoster} 
                                src={s.Poster === 'N/A' ? 'https://placehold.it/198x264&text=No+Image' : s.Poster}
                                alt={s.Title}
                            />
                            <Text 
                                sx={{
                                    fontSize: "24px",
                                    fontFamily: "Dm Sans",
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    position: "absolute",
                                    whiteSpace: "wrap",
                                    width: "295px",
                                    "&:hover": {
                                        textDecoration: "underline",
                                        textDecorationColor: "#0CAFFF"                                    }
                                }}
                            >{s.Title}</Text>
                        </div>
                    ))}
                </div>
                    <Text 
                        sx={{
                            fontSize: "24px",
                            fontFamily: "Dm Sans",
                            maxWidth: "250px",
                            color: "#000000",
                            "&:hover": {
                                textDecoration: "underline",
                                textDecorationColor: "#0CAFFF",
                            }
                        }}
                    >Game</Text>
                <div style={styles.section}>
                    {game.map(g => (
                        <div style={styles.cover} key={g.imdbID}>
                            <img style={styles.imagePoster} 
                                src={g.Poster === 'N/A' ? 'https://placehold.it/198x264&text=No+Image' : g.Poster}
                                alt={g.Title}
                            />
                            <Text 
                                sx={{
                                    fontSize: "24px",
                                    fontFamily: "Dm Sans",
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    position: "absolute",
                                    whiteSpace: "wrap",
                                    width: "295px",
                                    "&:hover": {
                                        textDecoration: "underline",
                                        textDecorationColor: "#0CAFFF",
                                    }
                                }}
                            >{g.Title}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}