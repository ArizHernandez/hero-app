import { getHerosByName } from "../../selectors/getHerosByName";

describe('Pruebas en getHeroByName', () => {

  test('Debe de retornar Hero', () => {
    const name = 'superman';
    const getHero = getHerosByName({name});

    expect(getHero.length).toBe(1);
  })
  
  test('Debe de retornar un objeto vació si no existe', () => {
    const name = 'test-error';
    const getHero = getHerosByName({name});

    expect(typeof getHero).toBe('object');
    expect(getHero.length).toBe(0);
  })
  
})
