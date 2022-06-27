export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_CATEGORY": {
      return {
        ...state,
        category: action.payload,
      };
    }
    case "FILTER_BY_SEARCH": {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case "CLEAR_FILTER": {
      return {
        searchQuery: "",
        category: "",
      };
    }
    default: {
      return state;
    }
  }
};
