import { types } from "../types/types";

/* State 
{
  name: 'Marco',
  isLoged: true/false
}
*/ 

export const authReducer = ( state = {}, action ) => {

  switch ( action.type ) {
    case types.login:
        return { 
          ...action.payload, 
          isLoged: true 
        }
    case types.logout:
      return {
        isLoged: false
      }
  
    default:
      return state;
  }
}