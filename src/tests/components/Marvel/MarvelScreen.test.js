const { shallow } = require("enzyme")
const { MarvelScreen } = require("../../../components/Marvel/MarvelScreen")

describe('Pruebas en el <MarvelScreen />', () => {
  
  const wrapper = shallow(<MarvelScreen />)

  test('Debe de cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cargar <HerosList />', () => {
    expect(wrapper.find('HerosList').exists()).toBe(true);
  });
})
