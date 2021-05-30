import { getHerosByPublisher } from "../../selectors/getHerosByPublisher";

describe('Pruebas en getHerosByPublisher', () => {

  test('Debe de retornar heros', () => {
    const publisher = 'Marvel Comics';
    const getHeros = getHerosByPublisher({publisher});

    expect(getHeros.length).toBe(10);
  });

  test('Debe de retornar un error si el publisher no es valido', () => {
    expect(() => {
      getHerosByPublisher({publisher:'Disney'})
    }).toThrow('Publisher Disney no son correcto');
  });
})
