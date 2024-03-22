
import Videogame from "../videogame";

export const Videogames = ({allVideogames,onClose}) => {
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
