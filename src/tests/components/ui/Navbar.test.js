import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {

  const historyMock = {
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
    location: {},
  }
  
  const context = {
    user: {
      name: 'Ariz',
      isLoged: true
    },
    dispatch: jest.fn()
  }

  const wrapper = mount( 
    <AuthContext.Provider value={context}>
      <MemoryRouter>
        <Router history={ historyMock }>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('Debe de cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(context.user.name);
  });
  
  test('Debe de llamar el logOut y usar history', () => {
    wrapper.find('button.nav-link').prop('onClick')();

    expect(context.dispatch).toBeCalledWith({ type: types.logout });
    expect(historyMock.replace).toBeCalledWith('/login');
  });
})