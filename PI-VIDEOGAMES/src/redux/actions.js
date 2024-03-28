import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';
export const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME';
export const ORDER_VIDEOGAMES_BY_RATING = 'ORDER_VIDEOGAMES_BY_RATING';
export const ORDER_VIDEOGAMES_BY_NAME = "ORDER_VIDEOGAMES_BY_NAME";
export const FILTER_VIDEOGAMES_BY_GENRE = "FILTER_VIDEOGAMES_BY_GENRE";
export const FILTER_VIDEOGAMES_BY_ORIGIN = "FILTER_VIDEOGAMES_BY_ORIGIN";
export const PAGINATE_VIDEOGAMES = "PAGINATE_VIDEOGAMES";
// export const addFav = (character) => {
  
//   return {
//     type: ADD_FAV,
//   payload:character}
// }



// ACTION | addFav
export const getVideoGames = () => {
  const endpoint = "http://localhost:3001/videogames";
  return async (dispatch) => {
    const { data } = await axios.get(endpoint)
    try{
       return dispatch({
        type: GET_VIDEOGAMES,
        payload: data,
      });
    } catch (error){
       window.alert("Videojuego no encontrado!");
    }

  };
};

export const getVideoGamesByName = (name) => {
  
  const endpoint = "http://localhost:3001/videogames/";
  return async (dispatch) => {
    console.log('Name getVideogamesByName: ',name);
    const { data } = await axios.get(`${endpoint}name?name=${name}`);
    console.log("Data getVideoGamesByName: ", data);

    try {
      return dispatch({
        type: GET_VIDEOGAME_BY_NAME,
        payload: data,
      });
    } catch (error) {
      window.alert("Videojuego no encontrado!");
    }
  };
};

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload:id
//   }
// }

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const { data } = await axios.delete(endpoint)
    try{
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      throw new TypeError("El favorito no se ha borrado");
    }
  };
};

export const filterVideogamesGen = (genre) => {
  return {
    type: FILTER_VIDEOGAMES_BY_GENRE,
    payload: genre
  }
}

export const filterVideogamesOrig = (origin) => {
  return {
    type: FILTER_VIDEOGAMES_BY_ORIGIN,
    payload: origin,
  };
};

export const orderVideogamesRat = (order) => {
  console.log('Order Action:', order)
  return {
    
    type: ORDER_VIDEOGAMES_BY_RATING,
    payload: order
  }
}

export const orderVideogamesAlfa = (order) => {
  console.log("Order Action:", order);
  return {
    type: ORDER_VIDEOGAMES_BY_NAME,
    payload: order,
  };
};

export const paginate = (Page) => {
  console.log("Order Paginate:", Page);
  const videoPerPage = 15;
  const start = (Page - 1) * videoPerPage;
  const end = start + videoPerPage;
  return {
    type: PAGINATE_VIDEOGAMES,
    payload: {start,end},
  };
};