import { useState } from "react";
import './createvideogame.css'
import "../../App.css";
//import logo from "../../assets/RickAndMorty.jpg"
import { Button2 } from "../Mystyles";


const CrearVideogame = ({crearVideogame}) => {

  const [userDataCrear, setUserDataCrear] = useState({
    name: "",
    description: "",
    image: "",
    platforms: [],
    launchDate:"",
    rating:"",
    genres:[]
  });

  const handleChangeCrear = (e) => {
      if (e.target.parentNode.parentNode.id === "genres") {
        if (e.target.checked) {
          setUserDataCrear({
            ...userDataCrear,
            genres: userDataCrear.genres.concat(e.target.value),
          });
        } else {
          setUserDataCrear({
            ...userDataCrear,
            genres: userDataCrear.genres.filter((x) => e.target.value !== x),
          });
        }
      }
      if (e.target.parentNode.parentNode.id === "platforms") {
        if (e.target.checked) {
          setUserDataCrear({
            ...userDataCrear,
            platforms: userDataCrear.platforms.concat(e.target.value),
          });
          console.log("Plataformas: ", userDataCrear.platforms);
        } else {
          setUserDataCrear({
            ...userDataCrear,
            platforms: userDataCrear.platforms.filter(
              (x) => e.target.name !== x
            ),
          });
        }
      }
      if (e.target.type !== "checkbox") {
          setUserDataCrear({
          ...userDataCrear,
          [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
          });
      }
      // setErrors(
      //   validate({
      //     ...form,
      //     [e.target.name]: e.target.value,
      //   })
      // );
    

  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearVideogame(userDataCrear)
  };

  return (
    <div>
      <form onSubmit={submitHandlerCrear}>
        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />
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
        <div className="Crear">
          <div className="inputcrear">
            <label className="labelcrear" htmlFor="name">
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
            <label className="labelcrear" htmlFor="description">
              Descripción:
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
            <label className="labelcrear" htmlFor="launchDate">
              Fecha de lanzamiento:
            </label>
            <input
              name="launchDate"
              className="date"
              type="date"
              id="date"
              value={userDataCrear.launchDate}
              onChange={handleChangeCrear}
            />
            <br />
            <label className="labelcrear" htmlFor="image">
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
            <label className="labelcrear" htmlFor="rating">
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
          </div>
          <div className="contenedorgenres">
            <hr style={{ borderStyle: "none" }} />
            <hr style={{ borderStyle: "none" }} />
            <hr style={{ borderStyle: "none" }} />
            <label className="labelgenres" htmlFor="genres">
              Generos:
            </label>
            <div id="genres" className="genres" onChange={handleChangeCrear}>
              <div className="Action">
                <input name="Action" value="4" type="checkbox" id="Action" />
                <label htmlFor="Action">Action</label>
              </div>

              <div className="Adventure">
                <input
                  name="Adventure"
                  value="3"
                  type="checkbox"
                  id="Adventure"
                />
                <label htmlFor="Adventure">Adventure</label>
              </div>

              <div className="Arcade">
                <input name="Arcade" value="11" type="checkbox" id="Arcade" />
                <label htmlFor="Arcade">Arcade</label>
              </div>
              <div className="BoardGames">
                <input
                  name="BoardGames"
                  value="28"
                  type="checkbox"
                  id="BoardGames"
                />
                <label htmlFor="BoardGames">Board Games</label>
              </div>
              <div className="Card">
                <input name="Card" value="17" type="checkbox" id="Card" />
                <label htmlFor="Card">Card</label>
              </div>
              <div className="Casual">
                <input name="Casual" value="40" type="checkbox" id="Casual" />
                <label htmlFor="Casual">Casual</label>
              </div>
              <div className="Educational">
                <input
                  name="Educational"
                  value="34"
                  type="checkbox"
                  id="Educational"
                />
                <label htmlFor="Educational">Educational</label>
              </div>
              <div className="Family">
                <input name="Family" value="19" type="checkbox" id="Family" />
                <label htmlFor="Family">Family</label>
              </div>
              <div className="Fighting">
                <input
                  name="Fighting"
                  value="6"
                  type="checkbox"
                  id="Fighting"
                />
                <label htmlFor="Fighting">Fighting</label>
              </div>
              <div className="indie">
                <input name="Indie" value="51" type="checkbox" id="Indie" />
                <label htmlFor="Indie">Indie</label>
              </div>
              <div className="Massively-Multiplayer">
                <input
                  name="Massively-Multiplayer"
                  value="59"
                  type="checkbox"
                  id="Massively-Multiplayer"
                />
                <label htmlFor="Massively-Multiplayer">
                  Massively-Multiplayer
                </label>
              </div>
              <div className="Platformer">
                <input
                  name="Platformer"
                  value="83"
                  type="checkbox"
                  id="Platformer"
                />

                <label htmlFor="Platformer">Platformer</label>
              </div>
              <div className="Puzzle">
                <input name="Puzzle" value="7" type="checkbox" id="Puzzle" />
                <label htmlFor="Puzzle">Puzzle</label>
              </div>
              <div className="Racing">
                <input name="Racing" value="1" type="checkbox" id="Racing" />
                <label htmlFor="Racing">Racing</label>
              </div>
              <div className="RPG">
                <input name="RPG" value="5" type="checkbox" id="RPG" />
                <label htmlFor="RPG">RPG</label>
              </div>

              <div className="Shooter">
                <input name="Shooter" value="2" type="checkbox" id="Shooter" />
                <label htmlFor="Shooter">Shooter</label>
              </div>

              <div className="Simulation">
                <input
                  name="Simulation"
                  value="14"
                  type="checkbox"
                  id="Simulation"
                />
                <label htmlFor="Simulation">Simulation</label>
              </div>
              <div className="Sports">
                <input name="Sports" value="15" type="checkbox" id="Sports" />
                <label htmlFor="Sports">Sports</label>
              </div>
              <div className="Strategy">
                <input
                  name="Strategy"
                  value="10"
                  type="checkbox"
                  id="Strategy"
                />

                <label htmlFor="Strategy">Strategy</label>
              </div>
            </div>
          </div>
          <hr style={{ borderStyle: "none" }} />
          <hr style={{ borderStyle: "none" }} />
          <hr style={{ borderStyle: "none" }} />
          <label className="labelgenres">Plataformas:</label>
          <div id="platforms" className="genres" onChange={handleChangeCrear}>
            <div>
              <input name="PC" type="checkbox" id="PC" value="PC" />
              <label htmlFor="PC">PC</label>
            </div>
            <div>
              <input name="iOS" type="checkbox" id="iOS" value="iOS" />
              <label htmlFor="iOS">iOS</label>
            </div>
            <div>
              <input
                name="Android"
                type="checkbox"
                id="Android"
                value="Android"
              />
              <label htmlFor="Android">Android.</label>
            </div>
            <div>
              <input name="macOS" type="checkbox" id="macOS" value="macOS" />
              <label htmlFor="macOS">Mac OS</label>
            </div>
            <div>
              <input
                name="PlayStation 4"
                type="checkbox"
                id="PlayStation 4"
                value="PlayStation 4"
              />
              <label htmlFor="PlayStation 4">Play Station 4</label>
            </div>
            <div>
              <input
                name="PlayStation 5"
                type="checkbox"
                id="PlayStation 5"
                value="PlayStation 5"
              />
              <label htmlFor="PlayStation 5">PlayStation 5.</label>
            </div>
            <div>
              <input name="XBOX" type="checkbox" id="XBOX" value="XBOX" />
              <label htmlFor="XBOX">XBOX</label>
            </div>
            <div>
              <input
                name="PS Vita"
                type="checkbox"
                id="PS Vita"
                value="PS Vita"
              />
              <label htmlFor="PS Vita">PS Vita</label>
            </div>
          </div>
          <hr style={{ borderStyle: "none" }} />
          <hr style={{ borderStyle: "none" }} />
          <hr style={{ borderStyle: "none" }} />
          <Button2
            type="submit"
            //disabled={!userDataCrear.email || !userDataCrear.password}
          >
            CREAR
          </Button2>
        </div>
      </form>
    </div>
  );
};
export default CrearVideogame;

