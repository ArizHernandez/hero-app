import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { AppRouter } from "../../../components/routers/AppRouter"

describe('Pruebas en el <AppRouter />', () => {
  
  const context = {
    user: {
      isLoged: false
    },
    dispatch: jest.fn()
  }

  test('Debe de mostrar el login, si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <AppRouter />
      </AuthContext.Provider>
    )
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.login__page').exists()).toBe(true);
  });
  
  test('Debe de mostrar <MarvelScreen /> si esta autenticado', () => {
    const context = {
      user: {
        name: 'Ariz',
        isLoged: true
      },
      dispatch: jest.fn()
    }

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <AppRouter />
      </AuthContext.Provider>
    )
    
    expect(wrapper.find('.navbar').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  })
  
  
})
