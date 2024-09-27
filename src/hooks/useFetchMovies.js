import {fetchMovies} from "../redux/slices/movieSlice";
import {useDispatch} from "react-redux";

export const useFetchMovies = () => {
  const dispatch = useDispatch();

  const fetchMoviesByType = (type) => {
    dispatch(fetchMovies({ type }));
  };

  return fetchMoviesByType;
};