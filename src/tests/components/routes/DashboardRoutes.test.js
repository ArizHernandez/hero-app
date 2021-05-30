import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../../auth/AuthContext"
import { DashboardRoutes } from "../../../components/routers/DashboardRoutes"

describe('Pruebas al <DasboardRoutes />', () => {
  
  const context = {
    user:{
      name: 'Ariz',
      isLoged: true
    },
    dispatch: jest.fn()
  }

  test('Debe de cargar todos los componentes correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )
      
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(context.user.name);
  })
  
})
