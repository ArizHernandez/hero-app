import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

  test('Debe de retornar el estado por defecto', () => {

    const reducer = authReducer( {}, {
      type: 'test'
    });

    expect(reducer).toEqual({ });
    expect(typeof reducer).toBe('object');
    
  });
  

  test('Debe de autenticar y colocar el name del usuario', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Ariz Hernández'
      }
    };
    
    const reducer = authReducer( {}, action );

    expect(reducer).toEqual( { 
      name:'Ariz Hernández', 
      isLoged: true 
    });

  });

  
  test('Debe de borrar el name y hacer el logOut', () => {
    
    const action = {
      type: types.logout
    } ;

    const reducer = authReducer( { name: 'Ariz Hernández', isLoged: true }, action );

    expect(reducer).toEqual({ 
      isLoged: false 
    });

  });
  
})
