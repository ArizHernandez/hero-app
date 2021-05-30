import React from 'react';
import { mount } from "enzyme"
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
  
  const context = {
    dispatch: jest.fn()
  };

  const history = {
    replace: jest.fn()
  };

  const wrapper = mount(
    <AuthContext.Provider value={context}>
      <LoginScreen history={history}/>
    </AuthContext.Provider>
  );

  test('Debe de cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de realizar el dispatch y la navegación', () => {
    const handleClick = wrapper.find('button').prop('onClick');

    handleClick();
    expect(context.dispatch).toBeCalledWith({type: types.login, payload: {name: 'Ariz'}});
    expect(history.replace).toBeCalledWith('/')

    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(history.replace).toBeCalledWith('/dc');
  })
  
})
