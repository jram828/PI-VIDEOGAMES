import SearchBar from "../searchbar";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Mystyles";
import { useDispatch } from "react-redux";
import { filterVideogamesGen, filterVideogamesOrig, getVideoGames, orderVideogamesAlfa, orderVideogamesRat } from "../../redux/actions";
import './nav.css'
import { useState } from "react";

const Nav = ({ onSearch }) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const onClickHome = () => {

        dispatch(getVideoGames());

  };

    const handleOrderRat = (e) => {
      e.preventDefault();
      dispatch(orderVideogamesRat(e.target.value));
  };

      const handleOrderAlfa = (e) => {  e.preventDefault();
      dispatch(orderVideogamesAlfa(e.target.value));};

    const handleFilterGen = (e) => {
      e.preventDefault();
      dispatch(filterVideogamesGen(e.target.value));
  };

  const handleFilterOrig = (e) => {
        e.preventDefault();
        dispatch(filterVideogamesOrig(e.target.value));
      };
  

  return (
    <div>
      <div
        className="nav"
        // style={{
        //   display: "flex",
        //   flexDirection: "row-reverse",
        //   justifyContent: "center",
        //   width: "90%",
        // }}
      >
        <div className="botonesnav">
          <Link to="/home/">
            <Button className="home" onClick={onClickHome}>
              Home
            </Button>
          </Link>
          <Link to={"/crearvideojuego"}>
            <Button className="crear">Crear Videojuego</Button>
          </Link>
          <Link to="about/">
            <Button className="about">About</Button>
          </Link>
          <SearchBar className="searchbar" onSearch={onSearch} />
        </div>

        {/* <Link to="favorites/">
        <Button>Favorites</Button>
      </Link> */}
      </div>
      {location.pathname !== "/about/" &&
      location.pathname !== "/crearvideojuego" ? (
        <div className="containerselect">
          <div className="orden">
            {/* <select className="orderid" onChange={handleOrder}>
          <option value="">Ordenar por Id</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select> */}
            <select className="ordenalfa" onChange={handleOrderAlfa}>
              <option value="">Ordenar alfabéticamente</option>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
            </select>
            <select className="orderrating" onChange={handleOrderRat}>
              <option value="">Ordenar por Rating</option>
              <option value="RA">Ascendente</option>
              <option value="RD">Descendente</option>
            </select>
          </div>
          <div className="filtros">
            <select className="filtergenre" onChange={handleFilterGen}>
              <option value="">Seleccione el género</option>
              <option value="Todos">Todos</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Arcade"> Arcade</option>
              <option value="Genderless">Genderless</option>
              <option value="Board Games">Board Games</option>
              <option value="Card">Card</option>
              <option value="Casual">Casual</option>
              <option value="Educational">Educational</option>
              <option value="Family">Family</option>
              <option value="Fighting">Fighting</option>
              <option value="Indie">Indie</option>
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Platformer">Platformer</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Racing">Racing</option>
              <option value="RPG">RPG</option>
              <option value="Shooter">Shooter</option>
              <option value="Simulation">Simulation</option>
              <option value="Sports">Sports</option>
              <option value="Strategy">Strategy</option>
            </select>
            <select className="filterorigen" onChange={handleFilterOrig}>
              <option value="">Seleccione el origen:</option>
              <option value="Todos">Todos</option>
              <option value="API">API</option>
              <option value="Creado">Creado</option>
            </select>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Nav;
