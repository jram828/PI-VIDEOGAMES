import axios from "axios";
import { ADD_FAV, CLOSE_VIDEOGAME, FILTER_VIDEOGAMES_BY_GENRE, FILTER_VIDEOGAMES_BY_ORIGIN, GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_VIDEOGAMES_BY_NAME, ORDER_VIDEOGAMES_BY_RATING, REMOVE_FAV, SET_LOADING, SET_SOURCE_FILTER } from "./actionTypes";




export const getVideoGames = () => {
  const endpoint = "http://localhost:3001/videogames";
  return async (dispatch) => {
    const { data } = await axios.get(endpoint)
    try{
       return dispatch(
         {
           type: GET_VIDEOGAMES,
           payload: data,
         }
       );
    } catch (error){
       window.alert("Videojuegos no encontrados!");
    }

  };
};

export const setLoading = (loading) => {
  return async (dispatch) => {
    return dispatch({
      type: SET_LOADING,
      payload: loading,
    });
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

    return {
      type: REMOVE_FAV,
      payload: id,
    };
};