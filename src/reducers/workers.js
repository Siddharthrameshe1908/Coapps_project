import * as actionType from "../constants/actionTypes";

const projectReducer = (state = { workerDetails: [] ,assigned:[]}, action) => {
  switch (action.type) {
    case actionType.FETCH_ALL:
      return {
        ...state,
        workerDetails: action.data.users,
        loading: false,
        errors: null,
      };
      case actionType.FETCH_ASSIGNED:
      return {
        ...state,
        assigned: action.data.assigned,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default projectReducer;