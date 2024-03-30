import {ADD_FAV, CLOSE_VIDEOGAME, FILTER_VIDEOGAMES_BY_GENRE, FILTER_VIDEOGAMES_BY_ORIGIN, GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_VIDEOGAMES_BY_NAME, ORDER_VIDEOGAMES_BY_RATING, PAGINATE_VIDEOGAMES, REMOVE_FAV} from "./actions";

let initialState = {
  // initialVideogames: [],
  myFavorites:[],
  allVideogames: [],
  videoPageContent:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      console.log("Payload Get Videogames: ", action.payload);
      return {
        ...state,
        allVideogames: action.payload,
        //initialVideogames: action.payload,
      };

    case GET_VIDEOGAME_BY_NAME:
      console.log("Payload Get Videogames By Name: ", action.payload);
      return { ...state, allVideogames: action.payload };

    case FILTER_VIDEOGAMES_BY_GENRE:
      console.log("Payload Filter by genre: ", action.payload);
      if (action.payload.toUpperCase() === "TODOS") {
        return {
          ...state,
          allVideogames: state.allVideogames,
        };
      } else {
        console.log("Genres filter by genre: ", state.allVideogames);

        var videogamesFilter = state.allVideogames.filter((videogame) =>
          videogame.genres.toUpperCase().includes(action.payload.toUpperCase())
        );

        return {
          ...state,
          allVideogames: videogamesFilter,
        };
      }
    case CLOSE_VIDEOGAME:
      console.log("Payload cLOSE : ", action.payload);
      return {
        ...state,
        allVideogames: state.allVideogames.filter(
          (videogame) => videogame.id !== action.payload
        ),
      };

    case FILTER_VIDEOGAMES_BY_ORIGIN:
      console.log("Payload origin: ", action.payload.toUpperCase());
      if (action.payload.toUpperCase() === "TODOS") {
        return {
          ...state,
          allVideogames: state.allVideogames,
        };
      } else if (action.payload.toUpperCase() === "CREADO") {
        let videogamesFilterOrig = state.allVideogames.filter(
          (videogame) => videogame.id.length === 36
        );

        return {
          ...state,
          allVideogames: videogamesFilterOrig,
        };
      } else {
        let videogamesFilterOrig = state.allVideogames.filter(
          (videogame) => videogame.id.length !== 36
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
    case PAGINATE_VIDEOGAMES:
      console.log("Payload Paginate Videogames: ", state.allVideogames);

      return {
        ...state,
        videoPageContent: state.allVideogames.slice(
          action.payload.start,
          action.payload.end
        ),
      };
    case ADD_FAV:

      console.log("Payload ADD: ", action.payload);
      return {
        ...state,
        myFavorites: [...state.myFavorites,action.payload],
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
