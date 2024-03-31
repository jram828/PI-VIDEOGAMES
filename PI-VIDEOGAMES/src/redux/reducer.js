import {ADD_FAV, CLOSE_VIDEOGAME, FILTER_VIDEOGAMES_BY_GENRE, FILTER_VIDEOGAMES_BY_ORIGIN, GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_VIDEOGAMES_BY_NAME, ORDER_VIDEOGAMES_BY_RATING, PAGINATE_VIDEOGAMES, REMOVE_FAV, SET_SOURCE_FILTER} from "./actions";

let initialState = {
  initialVideogames: [],
  myFavorites: [],
  initialMyFavorites: [],
  allVideogames: [],
  videoPageContent: [],
  sourceFilter: "all",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      console.log("Payload Get Videogames: ", action.payload);
      return {
        ...state,
        allVideogames: action.payload,
        initialVideogames: action.payload,
      };

    case GET_VIDEOGAME_BY_NAME:
      console.log("Payload Get Videogames By Name: ", action.payload);
      return { ...state, allVideogames: action.payload };

    case FILTER_VIDEOGAMES_BY_GENRE:
      if (action.payload.sourceFilter === "all") {
        console.log("Payload Filter by  Sou: ", action.payload);
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            allVideogames: state.initialVideogames,
          };
        } else {
          console.log("Genres filter by genre: ", state.allVideogames);

          let videogamesFilter = state.initialVideogames.filter((videogame) =>
            videogame.genres.toUpperCase().includes(action.payload.genre.toUpperCase())
          );
          console.log("Videogames filter: ", videogamesFilter);
          return {
            ...state,
            allVideogames: videogamesFilter,
          };
        }
      } else { 
        console.log('Payload genres filter: ', action.payload)
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            myFavorites: state.initialMyFavorites,
          };
        } else {
          console.log("Genres filter by genre: ", state.myFavorites);

          let videogamesFilter = state.initialMyFavorites.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );

          return {
            ...state,
            myFavorites: videogamesFilter,
          };
        }
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
      if (action.payload.sourceFilter === "all") {
        console.log("Payload origin: ", action.payload.origin.toUpperCase());
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            allVideogames: state.initialVideogames,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.initialVideogames.filter(
            (videogame) => videogame.id.length === 36
          );

          return {
            ...state,
            allVideogames: videogamesFilterOrig,
          };
        } else {
          let videogamesFilterOrig = state.initialVideogames.filter(
            (videogame) => videogame.id.length !== 36
          );

          return {
            ...state,
            allVideogames: videogamesFilterOrig,
          };
        }
      } else {
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            myFavorites: state.initialMyFavorites,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.initialMyFavorites.filter(
            (videogame) => videogame.id.length === 36
          );

          return {
            ...state,
            myFavorites: videogamesFilterOrig,
          };
        } else {
          let videogamesFilterOrig = state.initialMyFavorites.filter(
            (videogame) => videogame.id.length !== 36
          );

          return {
            ...state,
            myFavorites: videogamesFilterOrig,
          };
        }
      }
    case ORDER_VIDEOGAMES_BY_RATING:
      if (action.payload.sourceFilter === "all") {

        if (action.payload.order.toUpperCase() === "RA") {
          console.log("Payload Rating: ", action.payload);
          console.log("Estado Rating:", state.allVideogames);
          //console.log("Primer rating", state.allVideogames[0].rating);
          return {
            ...state,
            allVideogames: [...state.initialVideogames].sort(
              (a, b) => a.rating - b.rating
            ),
          };
        } else {
          return {
            ...state,
            allVideogames: [...state.initialVideogames].sort(
              (a, b) => b.rating - a.rating
            ),
          };
        }
      } else { 
        console.log("Payload Rating: ", action.payload);
        if (action.payload.order.toUpperCase() === "RA") {
          console.log("Estado Rating:", state.initialMyFavorites);
          // console.log("Primer rating", state.allVideogames[0].rating);
          return {
            ...state,
            myFavorites: [...state.initialMyFavorites].sort(
              (a, b) => a.rating - b.rating
            ),
          };
        } else {
          return {
            ...state,
            myFavorites: [...state.initialMyFavorites].sort(
              (a, b) => b.rating - a.rating
            ),
          };
        }

      }
        
    case ORDER_VIDEOGAMES_BY_NAME:
      if (action.payload.sourceFilter === "all") {

        if (action.payload.order.toUpperCase() === "A-Z") {
          return {
            ...state,
            allVideogames: [...state.initialVideogames].sort((a, b) =>
              a.name > b.name ? 1 : -1
            ),
          };
        } else {
          return {
            ...state,
            allVideogames: [...state.initialVideogames].sort((a, b) =>
              a.name < b.name ? 1 : -1
            ),
          };
        }
      } else {
                if (action.payload.order.toUpperCase() === "A-Z") {
                  return {
                    ...state,
                    myFavorites: [...state.initialMyFavorites].sort((a, b) =>
                      a.name > b.name ? 1 : -1
                    ),
                  };
                } else {
                  return {
                    ...state,
                    myFavorites: [...state.initialMyFavorites].sort((a, b) =>
                      a.name < b.name ? 1 : -1
                    ),
                  };
                }
       }

    // case PAGINATE_VIDEOGAMES:
    //   console.log("Payload Paginate Videogames: ", state.allVideogames);

    //   return {
    //     ...state,
    //     videoPageContent: state.allVideogames.slice(
    //       action.payload.start,
    //       action.payload.end
    //     ),
    //   };
    case ADD_FAV:
      console.log("Payload ADD: ", action.payload);
      return {
        ...state,
        initialMyFavorites: [...state.initialMyFavorites, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case SET_SOURCE_FILTER:
      console.log("Payload Source filter: ", action.payload);
      return {
        ...state,
        sourceFilter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
