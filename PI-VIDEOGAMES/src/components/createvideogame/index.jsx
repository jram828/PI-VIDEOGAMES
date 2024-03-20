import React, { useState } from "react";

import "../../App.css";
//import logo from "../../assets/RickAndMorty.jpg"
import { Button } from "../Mystyles";


const CrearVideogame = ({crearVideogame}) => {

  const [userDataCrear, setUserDataCrear] = useState({
    name: "",
    description: "",
    image: "",
    platforms: "",
    launchDate:"",
    rating:""
  });

  const handleChangeCrear = (e) => {
    setUserDataCrear({
      ...userDataCrear,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearVideogame(userDataCrear)
  };

  return (
    <div>
      <form onSubmit={submitHandlerCrear}>
        <h2
          style={{
            color: "white",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }}
        >
          CREAR VIDEOGAME{" "}
        </h2>
        <div className="fotoRegistro">
          {/* <img
          // src={}
          alt="Videogame"
          style={{
            height: "300px",
            marginBottom: "10px",
            borderRadius: "18%",
            borderColor: "black",
            borderStyle: "solid",
          }}
        /> */}
        </div>
        <div className="InputCrear">
          <label className="label" htmlFor="name">
            Nombre:
          </label>
          <input
            name="name"
            type="text"
            placeholder="Ingrese el nombre"
            value={userDataCrear.name}
            onChange={handleChangeCrear}
          />
          <br />
          <label className="label" htmlFor="description">
            Description:
          </label>
          <input
            name="description"
            type="textarea"
            placeholder="Ingrese la descripción"
            value={userDataCrear.description}
            onChange={handleChangeCrear}
            cols="40"
            rows="4"
          />
          <br />
          <label className="label" htmlFor="launchDate">
            Fecha de lanzamiento:
          </label>
          <input name="launchDate" className="date" type="date" id="date" />
          <br />
          <label className="label" htmlFor="image">
            Imagen:
          </label>
          <input
            name="image"
            type="text"
            placeholder="Ingrese la url de la imagen"
            value={userDataCrear.image}
            onChange={handleChangeCrear}
          />
          <br />
          <label className="label" htmlFor="rating">
            Rating:
          </label>
          <input
            name="rating"
            type="number"
            placeholder="Ingrese el rating"
            value={userDataCrear.rating}
            onChange={handleChangeCrear}
          />
          <hr style={{ borderStyle: "none" }} />
          <div className="contenedorAbout">
            <label className="label" htmlFor="genres">
              Generos:
            </label>
            <div id="genres" className="genres-div">
                <input name="Action" value="2" type="checkbox" id="Action" />
                <label htmlFor="Action">Action</label>

              <div className="indie">
                <input name="Indie" value="1" type="checkbox" id="Indie" />
                <label htmlFor="Indie">Indie.</label>
              </div>
              <div className="Adventure">
                <input
                  name="Adventure"
                  value="3"
                  type="checkbox"
                  id="Adventure"
                />
                <label htmlFor="Adventure">Adventure.</label>
              </div>
              <div>
                <input name="RPG" value="4" type="checkbox" id="RPG" />
                <label htmlFor="RPG">RPG.</label>
              </div>
              <div>
                <input
                  name="Strategy"
                  value="5"
                  type="checkbox"
                  id="Strategy"
                />
                <label htmlFor="Strategy">Strategy.</label>
              </div>
              <div>
                <input name="Shooter" value="6" type="checkbox" id="Shooter" />
                <label htmlFor="Shooter">Shooter.</label>
              </div>
              <div>
                <input name="Casual" value="7" type="checkbox" id="Casual" />
                <label htmlFor="Casual">Casual.</label>
              </div>
              <div>
                <input
                  name="Simulation"
                  value="8"
                  type="checkbox"
                  id="Simulation"
                />
                <label htmlFor="Simulation">Simulation.</label>
              </div>
              <div>
                <input name="Puzzle" value="9" type="checkbox" id="Puzzle" />
                <label htmlFor="Puzzle">Puzzle.</label>
              </div>
              <div>
                <input name="Arcade" value="10" type="checkbox" id="Arcade" />
                <label htmlFor="Arcade">Arcade.</label>
              </div>
              <div>
                <input
                  name="Platformer"
                  value="11"
                  type="checkbox"
                  id="Platformer"
                />
                <label htmlFor="Platformer">Platformer.</label>
              </div>
              <div>
                <input name="Racing" value="12" type="checkbox" id="Racing" />
                <label htmlFor="Racing">Racing.</label>
              </div>
              <div>
                <input
                  name="Massively-Multiplayer"
                  value="13"
                  type="checkbox"
                  id="Massively-Multiplayer"
                />
                <label htmlFor="Massively-Multiplayer">
                  Massively-Multiplayer.
                </label>
              </div>
              <div>
                <input name="Sports" value="14" type="checkbox" id="Sports" />
                <label htmlFor="Sports">Sports</label>
              </div>
              <div>
                <input
                  name="Fighting"
                  value="15"
                  type="checkbox"
                  id="Fighting"
                />
                <label htmlFor="Fighting">Fighting</label>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            disabled={!userDataCrear.email || !userDataCrear.password}
          >
            CREAR
          </Button>
        </div>
      </form>
    </div>
  );
};
export default CrearVideogame;

