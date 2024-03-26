import {FILTER_VIDEOGAMES_BY_GENRE, FILTER_VIDEOGAMES_BY_ORIGIN, GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_VIDEOGAMES_BY_NAME, ORDER_VIDEOGAMES_BY_RATING} from "./actions";

let initialState = {
  VideogamesOrdered: [],
  allVideogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      console.log("Payload Get Videogames: ", action.payload);
      return { ...state, allVideogames: action.payload };
       
    case GET_VIDEOGAME_BY_NAME:
      console.log("Payload Get Videogames By Name: ", action.payload);
      return { ...state, allVideogames: action.payload };

    case FILTER_VIDEOGAMES_BY_GENRE:
      if (action.payload.toUpperCase() === "ALL") {
        return {
          ...state,
          allVideogames: state.allVideogames,
        };
      } else {
        // var videogamesFilter = state.allVideogames.filter(
        //   (videogame) =>
        //     videogame.genres[0].toUpperCase() === action.payload.toUpperCase()
        // );

        // return {
        //   ...state,
        //   allVideogames: videogamesFilter,
        // };
        break
      }
    case FILTER_VIDEOGAMES_BY_ORIGIN:
      console.log("Payload origin: ", action.payload.toUpperCase());
      if (action.payload.toUpperCase() === "CREADO") {
        
        let videogamesFilterOrig = state.allVideogames.filter(
                  (videogame) =>
                    videogame.id.length===36
        );
        
        return {
          ...state,
          allVideogames: videogamesFilterOrig,
        };
      } else {
        let videogamesFilterOrig = state.allVideogames.filter(
          (videogame) =>
            videogame.id.length!==36
        );

        return {
          ...state,
          allVideogames: videogamesFilterOrig,
        };
      }

    case ORDER_VIDEOGAMES_BY_RATING:
      if (action.payload.toUpperCase() === "RA") {
        console.log("Payload Rating: ", action.payload);
        console.log("Estado Rating:", state.allVideogames);
        console.log("Primer rating", state.allVideogames[0].rating);
        return {
          ...state,
          allVideogames: [...state.allVideogames].sort(
            (a, b) => a.rating - b.rating
          ),
        };
      } else {
        return {
          ...state,
          allVideogames: [...state.allVideogames].sort(
            (a, b) => b.rating - a.rating
          ),
        };
      }
    case ORDER_VIDEOGAMES_BY_NAME:
      if (action.payload.toUpperCase() === "A-Z") {
        return {
          ...state,
          allVideogames: [...state.allVideogames].sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          allVideogames: [...state.allVideogames].sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
