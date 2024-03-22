import {FILTER_VIDEOGAMES, GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, ORDER_VIDEOGAMES} from "./actions";

let initialState = {
  // myFavorites: [],
  allVideogames: []
  };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      // return {
      //   ...state,
      //   allCharacters: [...state.allCharacters, action.payload],
      //   myFavorites: [...state.myFavorites, action.payload],
      // };
      console.log('Payload Get Videogames: ',action.payload)
      return { ...state, allVideogames: action.payload };
    case GET_VIDEOGAME_BY_ID:
    // const myFavoritesFilter = state.myFavorites.filter(
    //   (character) => character.id !== action.payload
      // );
      // return { ...state, myFavorites: myFavoritesFilter };
       return { ...state, myFavorites: action.payload };

      
    case FILTER_VIDEOGAMES:
      if (action.payload.toUpperCase() === "ALL") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        const charactersFilter = state.allCharacters.filter(
          (character) =>
            character.gender.toUpperCase() === action.payload.toUpperCase()
        );

        return {
          ...state,
          myFavorites: charactersFilter,
        };
      }

    case ORDER_VIDEOGAMES:
      if (action.payload.toUpperCase() === "A") {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }
    default:
      return state;
  }
};

export default rootReducer;