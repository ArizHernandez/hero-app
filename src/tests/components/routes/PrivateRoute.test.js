const { mount } = require("enzyme")
const { MemoryRouter } = require("react-router")
const { PrivateRoute } = require("../../../components/routers/PrivateRoute")

describe('Pruebas en <PrivateRoutes />', () => {
  
  const props = {
    location: {
      pathname: '/marvel',
      search: ''
    }
  } 

  Storage.prototype.setItem = jest.fn();

  test('Debe de mostrar el componente si esta autenticado y guardar en el localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isLoged={true}
          component={() => <span>Cargado</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
  
  test('Debe de bloquear el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isLoged={false}
          component={() => <span>Cargado</span>}
          {...props}
          />
      </MemoryRouter>
    )
    
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toBeCalledWith('lastPath', '/marvel');
  })
  
  
})
