import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getVideoGames, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

const Videogame = (props) => {
  console.log('Props Videogame',props)
  const { name, image, id } = props.videogame;
 // const { addFav, removeFav } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === false) {
      setIsFav(true);
     // addFav(props.videogame);
    } else if (isFav === true) {
      setIsFav(false);
      //removeFav(props.videogame.id);
    }
  };

  // useEffect(() => {
  //   props.myFavorites.forEach((fav) => {
  //     if (fav.id === props.character.id) {
  //       setIsFav(true);
  //     }
  //   });
  // }, [props.myFavorites, props.videogame.id]);

  return (
    <div className="container">
      <div className="card" key={id}>
        {isFav ? (
          <button
            onClick={handleFavorite}
            style={{
              backgroundColor: "aqua",
              borderStyle: "none",
              fontSize: "300%",
              cursor: "pointer",
            }}
          >
            ❤️
          </button>
        ) : (
          <button
            onClick={handleFavorite}
            style={{
              backgroundColor: "aqua",
              borderStyle: "none",
              fontSize: "300%",
              cursor: "pointer",
            }}
          >
            🤍
          </button>
        )}

        <button
          className="boton2"
          onClick={() => {
            props.onClose(id);
          }}
        >
          X
        </button>
        <img className="photo" src={image} alt="Imagen del personaje" />
        <Link to={`/detail/${id}`}>
          <h1
            style={{
              backgroundColor: "yellowgreen",
              fontSize: 16,
            }}
          >
            {name}
          </h1>
        </Link>
      </div>
    </div>
  );
};

var mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, { getVideoGames, removeFav })(Videogame);