import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';
export const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME';
export const ORDER_VIDEOGAMES_BY_RATING = 'ORDER_VIDEOGAMES_BY_RATING';
export const ORDER_VIDEOGAMES_BY_NAME = "ORDER_VIDEOGAMES_BY_NAME";
export const FILTER_VIDEOGAMES_BY_GENRE = "FILTER_VIDEOGAMES_BY_GENRE";
export const FILTER_VIDEOGAMES_BY_ORIGIN = "FILTER_VIDEOGAMES_BY_ORIGIN";
export const PAGINATE_VIDEOGAMES = "PAGINATE_VIDEOGAMES";
export const CLOSE_VIDEOGAME = "CLOSE_VIDEOGAME";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SET_SOURCE_FILTER = "SET_SOURCE_FILTER";


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
    //console.log('Name getVideogamesByName: ',name);
    const { data } = await axios.get(`${endpoint}name?name=${name}`);
    //console.log("Data getVideoGamesByName: ", data);

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

export const closeVideogame = (id) => {
  return {
    type: CLOSE_VIDEOGAME,
    payload:id
  }
}

export const filterVideogamesGen = (genre, sourceFilter) => {
  return {
    type: FILTER_VIDEOGAMES_BY_GENRE,
    payload: {genre,sourceFilter }
  };
};

export const filterVideogamesOrig = (origin, sourceFilter) => {
    return {
      type: FILTER_VIDEOGAMES_BY_ORIGIN,
      payload: { origin, sourceFilter }
    };
}

export const orderVideogamesRat = (order, sourceFilter) => {
  //console.log("Order Action:", order);
  return {
    type: ORDER_VIDEOGAMES_BY_RATING,
    payload: {order,sourceFilter }
  };
};

export const orderVideogamesAlfa = (order, sourceFilter) => {
  //console.log("Order Action:", order);
  return {
    type: ORDER_VIDEOGAMES_BY_NAME,
    payload: {order,sourceFilter }
  };
};

export const setSourceFilter = (sourceFilter) => {
  return {
    type: SET_SOURCE_FILTER,
    payload: sourceFilter,
  };
};

export const addFav = (videogame) => {
  return {
    type: ADD_FAV,
    payload: videogame,
  };
};

export const removeFav = (id) => {
  console.log('Id remove Fav:', id)
  // const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  // return async (dispatch) => {
  //   const { data } = await axios.delete(endpoint);
  //   try {
  //     return dispatch({
  //       type: "REMOVE_FAV",
  //       payload: data,
  //     });
  //   } catch (error) {
  //     throw new TypeError("El favorito no se ha borrado");
  //   }
  // };
    return {
      type: REMOVE_FAV,
      payload: id,
    };
};