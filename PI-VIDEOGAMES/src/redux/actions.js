import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';
export const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME';
export const ORDER_VIDEOGAMES = 'ORDER_VIDEOGAMES';
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
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
        type: "GET_VIDEOGAMES",
        payload: data,
      });
    } catch (error){
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

export const filterVideogames = (gender) => {
  return {
    type: FILTER_VIDEOGAMES,
    payload: gender
  }
}

export const orderVideogames = (order) => {
  console.log('Order Action:', order)
  return {
    
    type: ORDER_VIDEOGAMES,
    payload: order
  }
}