/* eslint-disable */
import { useSelector } from "react-redux";
// import Videogame from "../videogame";
import Videogames from "../videogames";

const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);
 const source="favorites"
  return (
    <div className="favorites">
      {/* {myFavorites.map((videogame) => {
        return ( */}
      <Videogames
        // key={videogame.id}
        allVideogames={myFavorites}
        onClose={onClose}
        source={source}
      />
      {/* );
      })} */}
    </div>
  );
};

export default Favorites;
