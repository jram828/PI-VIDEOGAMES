/* eslint-disable */
import { useEffect } from "react";
import { setLoading } from "../../redux/actions";
import Videogames from "../videogames";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(setLoading(false));
    //  return (() => {
    //    dispatch(setLoading(''));
    //  })
   }, [dispatch]);
  
//  const source="favorites"
  return (
    <div className="favorites">
      <Videogames
        // source={source}
      />
    </div>
  );
};

export default Favorites;
