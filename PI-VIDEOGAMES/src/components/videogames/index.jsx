
import { useEffect } from "react";
import Videogame from "../videogame";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../redux/actions";

export const Videogames = ({onClose }) => {
  const allVideogames = useSelector((state) => state.allVideogames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);

  console.log('Videogames Cards: ',allVideogames)
  return (
    <div className="cards">
      {allVideogames.map((videogame) => {
        return (
          <div key={videogame.name}>
            <Videogame videogame={videogame} onClose={onClose} />
          </div>
        );
      })}
    </div>
  );
};

export default Videogames;
