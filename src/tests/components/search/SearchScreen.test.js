import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen />', () => {
  
  test('Debe de cargarse correctamente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path='/search'
          component={SearchScreen}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-muted').text().trim()).toBe('Search a new hero, now!!');
  });
  
  test('Debe de mostrar a batman y el input con el valor del query string', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?hero=batman']}>
        <Route
          path='/search'
          component={SearchScreen}
        />
      </MemoryRouter>
    );
    
    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe de mostrar un mensaje de error si el heroe buscado no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?hero=test-error']}>
        <Route  
          path='/search'
          component={SearchScreen}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe('Hero not found');
  });

  test('Debe de llamar el push del history', () => {
    const historyMock = {
      push: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path='/search'
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target:{
        name:'heroName', value:'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect(historyMock.push).toBeCalledWith('?hero=batman')
  });
})
