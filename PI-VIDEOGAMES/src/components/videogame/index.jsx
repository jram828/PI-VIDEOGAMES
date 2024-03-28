import "../../App.css";
import "./videogame.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getVideoGames, removeFav } from "../../redux/actions";
import { useState } from "react";

const Videogame = (props) => {
  //console.log('Props Videogame',props)
  const { name, image, id, genres, rating, newRating } = props.videogame;
 // const { addFav, removeFav } = props;
   //console.log('Video id:',id)
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
        {/* {isFav ? (
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
        )} */}

        <button
          className="boton2"
          onClick={() => {
            props.onClose(id);
          }}
        >
          X
        </button>
        <img className="photo" src={image} alt="Imagen del videojuego" />
        <h1 style={{fontSize:"20px"}}>{name}</h1>
        <h4>Rating: {rating}{ newRating}</h4>
        {/* <h4>Plataforms: {platforms}</h4> */}
        <h4>Géneros: {genres}</h4>
        <Link to={`/detail/${id}`}>
          <h3
            style={{
              color:"white",
              backgroundColor:"gray",
            }}
          >
            Ver detalles
          </h3>
        </Link>
      </div>
    </div>
  );
};

var mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, { getVideoGames, removeFav })(Videogame);
