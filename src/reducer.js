
export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
  };
  

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
        case 'SET_DISCOVER_WEEKLY':
          return {
              ...state,
              discover_weekly: action.discover_weekly,
          };
        case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        };
        case 'SET_PLAYLISTS':
          return {
              ...state,
              playlists: action.playlists,
          };
   default:
       return state;
}
}

export default reducer;