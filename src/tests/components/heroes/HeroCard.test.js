import { shallow } from "enzyme"
import { HeroCard } from "../../../components/heroes/HeroCard"

describe('Pruebas en <HeroCard />', () => {
  
  const hero = {
    'id': 'dc-batman',
    'superhero':'Batman', 
    'publisher':'DC Comics', 
    'alter_ego':'Bruce Wayne',
    'first_appearance':'Detective Comics #27',
    'characters':'Bruce Wayne'
  }

  const wrapper = shallow(<HeroCard {...hero} />)

  test('Debe cargar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe de tener el nombre de Batman', () => {
    expect(wrapper.find('.card-title').text().trim()).toBe(hero.superhero);
  });
  
  test('Debe de tener solo alter_ego', () => {
    expect(wrapper.find('.hero-name').text().trim()).toBe(hero.alter_ego);
  });
  
  test('Debe de tener solo characters', () => {
    const hero = {
      'id': 'dc-flash',
      'superhero':'Flash', 
      'publisher':'DC Comics', 
      'alter_ego':'Jay Garrick',
      'first_appearance':'Flash Comics #1',
      'characters':'Jay Garrick, Barry Allen, Wally West, Bart Allen'
    }
    const wrapper = shallow(<HeroCard {...hero} />);

    expect(wrapper.find('.hero-name').text().trim()).toBe(hero.characters);
  }); 
})
