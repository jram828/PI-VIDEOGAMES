import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { URL } from "../../App";
import "./detail.css";

const Detail = () => {
  const [videogame, setVideogame] = useState({});
  const { id } = useParams();
  console.log('Details id:', id)
  console.log("URL Detail:", `${URL}${id}`);
  useEffect(() => {
    axios(`${URL}${id}`).then(({ data }) => {
      console.log('Data detail:',data)
      if (data.name) {
        setVideogame(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setVideogame({});
  }, [id]);

  console.log('videogame Detail',videogame.genres)
  return (
    <div className="container">
      <div className="detail" key={id}>
        {videogame.name && <h1> {videogame.name} </h1>}

        <img className="photo" src={videogame.image} alt={videogame.name} />
        <h4>
          Rating: {videogame.rating}{' '}
          {videogame.newRating}
        </h4>
        <h4>Plataformas: {videogame.platforms}</h4>
        <h4>Géneros: {videogame.genres}</h4>
        <h4>Fecha de lanzamiento: {videogame.launchDate}</h4>
        <h4>Descripción: {videogame.description}</h4>
        <h4>Id: {videogame.id}</h4>
      </div>
    </div>
  );
};

export default Detail;
