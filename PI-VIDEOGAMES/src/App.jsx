/* eslint-disable */
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about";
import Detail from "./components/detail";
import Landing from "./components/landing";
import { useDispatch, useSelector } from "react-redux";
import Videogames from "./components/videogames";
import CrearVideogame from "./components/createvideogame";
import videogame from "./components/videogame";
import { crearvideojuego } from "./utils/crearvideojuego";
import { closeVideogame } from "./redux/actions";
import Favorites from "./components/favorites";
import CrearUsuario from "./components/crearusuario";
import axios from "axios";

export const URL = "http://localhost:3001/videogames/";
// 'https://rickandmortyapi.com/api/character/'

function App() {
  const allVideogames = useSelector((state) => state.allVideogames);
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const initialVideogames = async () => {};

  //console.log('Initial video: ',allVideogames)
      async function crearUsuario(userDataCrear) {
        const { email, password } = userDataCrear;

        //console.log('User Data crear: ', userDataCrear)
        const URL = "http://localhost:3001/register";
        try {
          //console.log({ email: email, password: password })
          const response = await axios.post(URL, { email: `${email}`, password: `${password}` });
          //console.log('Response crear usuario: ', response)
          window.alert("Usuario creado con éxito.");
          setAccess(false);
          access && navigate("/");
        } catch (error) {
          console.log('error: ', error)
          window.alert("No fue posible crear el usuario.");
        }
      }

  function crearVideogame(userDataCrear) {
    //console.log("Datos videojuego Crear:", userDataCrear);
    //console.log('Plataformas: ',platforms)
    // const URL = "http://localhost:3001/rickandmorty/register/";
    try {
      const newVideogame = crearvideojuego(userDataCrear);
      console.log("Juego creado:", newVideogame);
      window.alert("Videojuego creado con éxito.");
      setAccess(true);
      access && navigate("/home");
    } catch (error) {
      window.alert("No fue posible crear el videojuego.");
    }
  }


    async function login(userData) {
      const { email, password } = userData;
      const URL = "http://localhost:3001/login";
      try {
        const { data } = await axios(
          URL + `?email=${email}&password=${password}`
        );
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      } catch (error) {
        window.alert("Usuario o contraseña incorrectos");
      }
    }
  const logout = () => {
    alert("Ha salido exitosamente");
    setAccess(false);
    navigate("/");
  };
  // const signIn = () => {
  //   setAccess(true);
  //   navigate("/home");
  // };

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
    //e.preventdefault();
    dispatch(closeVideogame(id));
  };

  //Acceder al modulo de crear usuario
  const clickHandlerCrear = (e) => {
    e.preventDefault();
    setAccess(true);
    navigate("/crearusuario");
  };
  const source = "all";
  //console.log("Initial video 2: ", allVideogames);
  return (
    <div className="App">
      {location.pathname !== "/" &&
       location.pathname !== "/crearusuario" ? (
        <div className="DivPrueba">
          <Nav onSearch={onSearch} logout={logout} />
        </div>
      ) : undefined}
      <Routes>
        <Route
          path="/"
          element={
            <Landing login={login} clickHandlerCrear={clickHandlerCrear} />
          }
        />
        <Route
          path="/home"
          element={
            <Videogames
              allVideogames={allVideogames}
              onClose={onClose}
              initialVideogames={initialVideogames}
              source={source}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route
          path="/crearusuario"
          element={<CrearUsuario crearUsuario={crearUsuario} />}
        />
        <Route
          path="/crearvideojuego"
          element={
            <CrearVideogame
              videogame={videogame}
              crearVideogame={crearVideogame}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
