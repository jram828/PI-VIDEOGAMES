import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about";
import Detail from "./components/detail";
import Landing from "./components/landing";
import { useDispatch } from "react-redux";
import Videogames from "./components/videogames";
import CrearVideogame from "./components/createvideogame";
// import Favorites from "./components/favorites";


export const URL = "http://localhost:3001/videogames/";
// 'https://rickandmortyapi.com/api/character/'

function App() {
  
  // const { data } = axios(`${URL}`);
  // console.log('Data: ',data)
  const [videogames, setVideogames] = useState([]);

  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

 useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const initialVideogames = async () => {
    try {
      const { data } = await axios(`${URL}`);
      setVideogames(...videogames, data);
    } catch (error) {
      window.alert("Character Not Found. There are 826 characters!");
    }
  };


  
  console.log('Initial video: ',videogames)
  // async function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   try {
  //     const { data } = await axios(
  //       URL + `?email=${email}&password=${password}`
  //     );
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate("/home");
  //   } catch (error) {
  //     window.alert("Usuario o contraseña incorrectos");
  //   }
  // }

  async function crearVideogame(userDataCrear) {
    const { name, description, image, launchDate, rating, platforms, genres } = userDataCrear;
    console.log('Datos videojuego Crear:', userDataCrear)
    console.log('Plataformas: ',platforms)
    // const URL = "http://localhost:3001/rickandmorty/register/";
    try {
      await axios.post(URL, {
    name,
    description,
    image,
    platforms,
    launchDate,
    rating,
    genres
  });
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
    // try {
    //   //http://localhost:3001/videogames/name?name=%22Grand%20Theft%20Auto%22
    //   console.log(name)
    //   const { data } = await axios(`${URL}name?name=${name}`);
    //   console.log('Data Onsearch: ',data)
    //   setVideogames(...videogames, data);
    //   console.log('Videogames Onsearch: ',videogames)
    // } catch (error) {
    //   window.alert("Videogame Not Found!");
    // }
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
console.log("Initial video 2: ", videogames);
  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <div className="DivPrueba">
          {/* <h1
            style={{
              color: "blue",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            PROYECTO INDIVIDUAL - SOY HENRY{" "}
          </h1>
          <h2
            style={{
              color: "blue",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            Videogames{" "}
          </h2> */}
          <Nav onSearch={onSearch} logout={logout} />
        </div>
      ) : undefined}
      <Routes>
        <Route path="/" element={<Landing signIn={signIn} />} />
        <Route
          path="/home"
          element={
            <Videogames
              videogames={videogames}
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
          element={<CrearVideogame crearVideogame={crearVideogame} />}
        />
      </Routes>
    </div>
  );
}

export default App;
