import { shallow } from "enzyme";
import { DcScreen } from "../../../components/dc/DcScreen"

describe('Pruebas en <DcScreen />', () => {
  
  const wrapper = shallow(<DcScreen />)

  test('Debe cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe de cargar HerosList', () => {
    expect(wrapper.find('HerosList').exists()).toBe(true);
  });
  
})
