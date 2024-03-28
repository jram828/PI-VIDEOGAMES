import { useState } from "react";
import { useSelector } from "react-redux";


const Paginate = () => {
  const allVideogames = useSelector((state) => state.allVideogames);
  const [Page, setPage] = useState(1)
  
  const videoPerPage = 15;
  const nPages = Math.ceil(allVideogames.length / videoPerPage);
  //const start = (Page - 1) * videoPerPage;
  //const end = start + videoPerPage;
 // var videoPageContent = allVideogames.slice(start, end)

  const prevPage = () => {
    if (Page > 1) { setPage(Page - 1) }
  }

  const nextPage = () => {
    if (Page < nPages) { setPage(Page + 1); }
  }
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
    </div>
  )
};
 

export default Paginate;