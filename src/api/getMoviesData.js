// Makes 3 requests to the MovieDB API and combines them into a single array
export const getMoviesData = (setMovieData, pages) => {
  Promise.all(
    pages.map((page) =>
      fetch(`https://api.themoviedb.org/3/movie/popular/?page=${page}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzM0YjJjOTNjNTk3OTllZGU3OTUwZGQ4ZDU2MWZkYyIsInN1YiI6IjYzMDIwMzY3N2Q0MWFhMDA3ZTM4ZTZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD8ZqO9icsMJMc6JmCN68HxZ-3cEXm9PvKbf0GXnOig",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data.results)
    )
  ).then((data) => {
    setMovieData(data.flat());
  });
};
