import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroScreen } from "../../../components/heroes/HeroScreen"

describe('Pruebas en <HeroScreen />', () => {
  
  const historyMock = {
    length: '10',
    push: jest.fn(),
    goBack: jest.fn()
  }

  beforeAll(() => {
    jest.clearAllMocks();
  })

  test('Debe de cargar el componente redirect si no hay argumentos en el url', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
  
  test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-superman']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.container').exists()).toBe(true);
  });

  test('Debe de regresar a la pantalla anterior con push', () => {    
    const historyMock = {
      length: '1',
      push: jest.fn(),
      goBack: jest.fn()
    }  

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-superman']}>
        <Route 
          path="/hero/:heroId" 
          component={() => ( <HeroScreen history={historyMock} />)} 
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalledWith('/');
  });
  
  test('Debe de regresar al path anterior', () => {
    const historyMock = {
      length: '5',
      goBack: jest.fn(),
      push: jest.fn()
    };

    const wrapper = mount( 
      <MemoryRouter initialEntries={['/hero/dc-superman']}>
        <Route
          path='/hero/:heroId'
          component={ () => (<HeroScreen history={historyMock}/>)}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();

    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test('Debe de llamar el redirect si el hero no existe', () => {
    const historyMock = {
      length: '2',
      goBack: jest.fn(),
      push: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/test-error']}>
        <Route
          path='/hero/:heroId'
          component={() => (<HeroScreen history={historyMock}/>)}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });
})
