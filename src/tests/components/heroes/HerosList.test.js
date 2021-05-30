import { shallow } from "enzyme"
import { HerosList } from "../../../components/heroes/HerosList"

describe('Pruebas en <HerosList />', () => {
  
  const wrapper = shallow(<HerosList publisher={'Marvel Comics'} />)

  test('Debe de cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
