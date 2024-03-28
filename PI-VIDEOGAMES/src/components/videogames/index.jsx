
import './videogames.css';
import { Button } from "../Mystyles";
import { useEffect, useState } from "react";
import Videogame from "../videogame";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, paginate } from "../../redux/actions";

export const Videogames = ({onClose }) => {
  const allVideogames = useSelector((state) => state.allVideogames);
  //const videoPageContent = useSelector((state) => state.videoPageContent);
  const [Page,setPage]=useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoGames());
   
  }, [dispatch]);

    // useEffect(() => {
    //   dispatch(paginate(1));
    // }, [dispatch]);

  const videoPerPage = 15;
  // //const Page = 1;
  const nPages = Math.ceil(allVideogames.length / videoPerPage);
  const start = (Page - 1) * videoPerPage;
  const end = start + videoPerPage;

  const videoPageContent=allVideogames.slice(start,end)

  const prevPage = () => {
    if(Page>1){setPage(Page-1)}
  }

  const nextPage = () => {
    if(Page<nPages){setPage(Page + 1);}
  }
  console.log('Videogames Cards: ',videoPageContent)
  return (
    <div>
      <div className="paginate">
        {" "}
        <button className="botonpage" onClick={prevPage}>
          Anterior
        </button>
        <h3 className='labelpage'>
          {" "}
          Página: {Page} de {nPages}
        </h3>
        <button className="botonpage" onClick={nextPage}>
          Siguiente
        </button>
      </div>
      <div className="cards">
        {videoPageContent.map((videogame) => {
          return (
            <div key={videogame.name}>
              <Videogame videogame={videogame} onClose={onClose} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videogames;
