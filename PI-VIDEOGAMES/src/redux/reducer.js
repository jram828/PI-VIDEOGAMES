import { SET_LOADING } from "./actionTypes";
import {ADD_FAV, CLOSE_VIDEOGAME, FILTER_VIDEOGAMES_BY_GENRE, FILTER_VIDEOGAMES_BY_ORIGIN, GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_VIDEOGAMES_BY_NAME, ORDER_VIDEOGAMES_BY_RATING, REMOVE_FAV, SET_SOURCE_FILTER} from "./actionTypes";

let initialState = {
  initialVideogames: [],
  myFavorites: [],
  initialMyFavorites: [],
  allVideogames: [],
  foundVideogame: [],
  initialFoundVideogame: [],
  videoPageContent: [],
  sourceFilter: "all",
  loading: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      //console.log("Payload Get Videogames: ", action.payload);
      return {
        ...state,
        allVideogames: action.payload,
        initialVideogames: action.payload,
      };

    case GET_VIDEOGAME_BY_NAME:
      console.log("Payload Get Videogames By Name: ", action.payload);
      return {
        ...state,
        foundVideogame: action.payload,
        initialFoundVideogame: action.payload,
      };

    case FILTER_VIDEOGAMES_BY_GENRE:
      if (action.payload.sourceFilter === "all") {
        //console.log("Payload Filter by  Sou: ", action.payload);
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            allVideogames: state.initialVideogames,
          };
        } else {
          //console.log("Genres filter by genre: ", state.allVideogames);

          let videogamesFilter = state.allVideogames.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );
          //console.log("Videogames filter: ", videogamesFilter);

          if (videogamesFilter.length !== 0) {
            return {
              ...state,
              allVideogames: videogamesFilter,
            };
          } else {
            return {
              ...state,
              allVideogames: [],
              loading: false,
            };
          }
          
        }
      } else if (action.payload.sourceFilter === "favorites") {
        //console.log('Payload genres filter: ', action.payload)
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            myFavorites: state.initialMyFavorites,
          };
        } else {
          //console.log("Genres filter by genre: ", state.myFavorites);

          let videogamesFilter = state.myFavorites.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );

          if (videogamesFilter.length !== 0) {
            return {
              ...state,
              myFavorites: videogamesFilter,
              loading: false,
            };
          } else {
            return {
              ...state,
              myFavorites: [],
              loading: false,
            };
          }
        }
      } else {
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            foundVideogame: state.initialFoundVideogame,
          };
        } else {
          console.log("Search filter by genre: ", state.foundVideogame);

          let videogamesFilter = state.foundVideogame.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );

          if (videogamesFilter.length !== 0) {
            return {
              ...state,
              foundVideogame: videogamesFilter,
              loading: false,
            };
          } else {
            return {
              ...state,
              foundVideogame: [],
              loading: false,
            };
          }
        }

      }


    case CLOSE_VIDEOGAME:
      //console.log("Payload cLOSE : ", action.payload);
      return {
        ...state,
        allVideogames: state.allVideogames.filter(
          (videogame) => videogame.id !== action.payload
        ),
      };

    case FILTER_VIDEOGAMES_BY_ORIGIN:
      console.log("Payload origin: ", action.payload);
      if (action.payload.sourceFilter === "all") {
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            allVideogames: state.initialVideogames,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.allVideogames.filter(
            (videogame) => videogame.id.length === 36
          );
          
          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              allVideogames: videogamesFilterOrig,
              loading: false,
            };
          } else {
            return {
              ...state,
              allVideogames: [],
              loading: false,
            };
          }

        } else {
          let videogamesFilterOrig = state.allVideogames.filter(
            (videogame) => videogame.id.length !== 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              allVideogames: videogamesFilterOrig,
              loading: false,
            };
          } else {
            return {
              ...state,
              allVideogames: [],
              loading: false,
            };
          }
        }
      } else if (action.payload.sourceFilter === "favorites") {
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            myFavorites: state.initialMyFavorites,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.myFavorites.filter(
            (videogame) => videogame.id.length === 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              myFavorites: videogamesFilterOrig,
              loading: false,
            };
          } else {
            return {
              ...state,
              myFavorites: [],
              loading: false,
            };
          }
        } else {
          let videogamesFilterOrig = state.myFavorites.filter(
            (videogame) => videogame.id.length !== 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              myFavorites: videogamesFilterOrig,
              loading: false,
            };
          } else {
            return {
              ...state,
              myFavorites: [],
              loading: false,
            };
          }
        }
      } else {
                console.log(
                  "Origin search: ",
                  action.payload.origin.toUpperCase()
                );
                if (action.payload.origin.toUpperCase() === "TODOS") {
                  return {
                    ...state,
                    foundVideogame: state.initialFoundVideogame,
                  };
                } else if (action.payload.origin.toUpperCase() === "CREADO") {
                  let videogamesFilterOrig = state.foundVideogame.filter(
                    (videogame) => videogame.id.length === 36
                  );

                  if (videogamesFilterOrig.length !== 0) {
                    return {
                      ...state,
                      foundVideogame: videogamesFilterOrig,
                      loading: false,
                    };
                  } else {
                    return {
                      ...state,
                      foundVideogame: [],
                      loading: false,
                    };
                  }
                } else {
                  // console.log('State Found: ',state.foundVideogame);
                  let videogamesFilterOrig = state.foundVideogame.filter(
                    (videogame) => videogame.id.length !== 36
                  );

                  if (videogamesFilterOrig.length !== 0) {
                    return {
                      ...state,
                      foundVideogame: videogamesFilterOrig,
                      loading: false,
                    };
                  } else {
                    return {
                      ...state,
                      foundVideogame: [],
                      loading: false,
                    };
                  }
                }
      }
    case ORDER_VIDEOGAMES_BY_RATING:
      if (action.payload.sourceFilter === "all") {
        if (action.payload.order.toUpperCase() === "RA") {
          //console.log("Payload Rating: ", action.payload);
          //console.log("Estado Rating:", state.allVideogames);
          //console.log("Primer rating", state.allVideogames[0].rating);
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
      } else if (action.payload.sourceFilter === "favorites") {
        //console.log("Payload Rating: ", action.payload);
        if (action.payload.order.toUpperCase() === "RA") {
          //console.log("Estado Rating:", state.initialMyFavorites);
          // console.log("Primer rating", state.allVideogames[0].rating);
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort(
              (a, b) => a.rating - b.rating
            ),
          };
        } else {
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort(
              (a, b) => b.rating - a.rating
            ),
          };
        }
      } else {
        //console.log("Payload Rating: ", action.payload);
        if (action.payload.order.toUpperCase() === "RA") {
          //console.log("Estado Rating:", state.initialMyFavorites);
          // console.log("Primer rating", state.allVideogames[0].rating);
          return {
            ...state,
            foundVideogame: [...state.foundVideogame].sort(
              (a, b) => a.rating - b.rating
            ),
          };
        } else {
          return {
            ...state,
            foundVideogame: [...state.foundVideogame].sort(
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
      } else if (action.payload.sourceFilter === "favorites") {
        if (action.payload.order.toUpperCase() === "A-Z") {
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort((a, b) =>
              a.name > b.name ? 1 : -1
            ),
          };
        } else {
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort((a, b) =>
              a.name < b.name ? 1 : -1
            ),
          };
        }
      } else { 
                if (action.payload.order.toUpperCase() === "A-Z") {
                  return {
                    ...state,
                    foundVideogame: [...state.foundVideogame].sort((a, b) =>
                      a.name > b.name ? 1 : -1
                    ),
                  };
                } else {
                  return {
                    ...state,
                    foundVideogame: [...state.foundVideogame].sort((a, b) =>
                      a.name < b.name ? 1 : -1
                    ),
                  };
                }
      }

    case ADD_FAV:
      //console.log("Payload ADD: ", action.payload);
      return {
        ...state,
        initialMyFavorites: [...state.initialMyFavorites, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (videogame) => videogame.id !== action.payload
        ),
      };

    case SET_SOURCE_FILTER:
      //console.log("Payload Source filter: ", action.payload);
      return {
        ...state,
        sourceFilter: action.payload,
      };
    case SET_LOADING:
      //console.log("Payload Source filter: ", action.payload);
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
