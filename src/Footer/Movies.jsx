import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      {movies
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((movie) => (
          <div key={movie._id}>
            <p>{movie.type}</p>
          </div>
        ))}
      <p className="text-white">abc</p>
    </div>
  );
};

export default Movies;
