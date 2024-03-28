import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about";
import Detail from "./components/detail";
import Landing from "./components/landing";
import { useSelector } from "react-redux";
import Videogames from "./components/videogames";
import CrearVideogame from "./components/createvideogame";
import videogame from "./components/videogame";
import { crearvideojuego } from "./utils/crearvideojuego";
// import Favorites from "./components/favorites";


export const URL = "http://localhost:3001/videogames/";
// 'https://rickandmortyapi.com/api/character/'

function App() {
   const allVideogames = useSelector((state) => state.allVideogames);

  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


 useEffect(() => {
    !access && navigate("/");
 }, [access, navigate]); 
  
  const initialVideogames = async () => {

  };
  
  //console.log('Initial video: ',allVideogames)

  function crearVideogame(userDataCrear) {
    console.log('Datos videojuego Crear:', userDataCrear)
    //console.log('Plataformas: ',platforms)
    // const URL = "http://localhost:3001/rickandmorty/register/";
    try {
      const newVideogame = crearvideojuego(userDataCrear);
      console.log('Juego creado:',newVideogame)
      window.alert("Videojuego creado con éxito.");
      setAccess(true);
      access && navigate("/home");
    } catch (error) {
      window.alert("No fue posible crear el videojuego.");
    }
  }

  const logout = () => {
    alert("Ha salido exitosamente");
    setAccess(false);
    navigate("/");
  };
  const signIn = () => {
      
      setAccess(true);
      navigate("/home");
    };

  const onSearch = async (name) => {
  //   try {
  //     //http://localhost:3001/videogames/name?name=%22Grand%20Theft%20Auto%22
  //     console.log(name)
  //     const { data } = await axios(`${URL}name?name=${name}`);
  //     console.log('Data Onsearch: ',data)
  //     setVideogames([videogames, data]);
  //     console.log('Videogames Onsearch: ', videogames)
  //     setAccess(true);
  //     access && navigate("/home");
  //   } catch (error) {
  //     window.alert("Videogame Not Found!");
  //   }
  };

  const onClose = (id) => {
    // const charactersFilter = characters.filter(
    //   (character) => character.id !== id
    // );
    // setCharacters(charactersFilter);
  };

  //Acceder al modulo de crear usuario
  // const clickHandlerCrear = (e) => {
  //   e.preventDefault();
  //   setAccess(true);
  //   navigate("/crearusuario");
  // };
console.log("Initial video 2: ", allVideogames);
  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <div className="DivPrueba">
          <Nav onSearch={onSearch} logout={logout} />
        </div>
      ) : undefined}
      <Routes>
        <Route path="/" element={<Landing signIn={signIn} />} />
        <Route
          path="/home"
          element={
            <Videogames
              allVideogames={allVideogames}
              onClose={onClose}
              initialVideogames={initialVideogames}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/favorites" element={<Favorites onClose={onClose} />} /> */}
        <Route
          path="/crearvideojuego"
          element={<CrearVideogame videogame={videogame} crearVideogame={crearVideogame} />}
        />
      </Routes>
    </div>
  );
}

export default App;
