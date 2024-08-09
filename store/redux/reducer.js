
const initialState = {
    ids: []
  };

  const favReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVOURITE':
        return {
          ...state,
          ids: [...state.ids,action.payload]
        };
        // case 'RECENTLY_ADDED_FAVOURITE':
        // return {
        //   ...state,
        //   ids: [action.payload]
        // };
        case 'CLEAR_FAVOURITE':
          return {
            ...state,
            ids: state.ids.filter(item=> item !== action.payload),
          };
      default:
        return state;
    }
  };
  
  export default favReducer;