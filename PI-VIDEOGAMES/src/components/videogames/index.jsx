import { useEffect,useState } from "react";
import Videogame from "../videogame";
import axios from "axios";

export const Videogames = ({onClose}) => {
  // const [videogames, setVideogames] = useState([]);
  // //  useEffect(() => {
  //      const initialVideogames = async () => {
  //        try {
  //          const { data } = await axios(`${URL}`);
  //          setVideogames(...videogames, data);
  //        } catch (error) {
  //          window.alert("Character Not Found. There are 826 characters!");
  //        }
  // };
  
  //    initialVideogames();
  // //  }, []);
  // console.log('Videogames Cards: ',videogames)
  return (
    <div className="cards">
      {/* {videogames.map((videogame) => {
        return (
          <div key={videogame.name}>
            <Videogame character={videogame} onClose={onClose} />
          </div>
        );
      })} */}
    </div>
  );
};

export default Videogames;
