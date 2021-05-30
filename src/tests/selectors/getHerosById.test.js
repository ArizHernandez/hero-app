import { getHerosById } from "../../selectors/getHerosById";

describe('Pruebas en getHerosById', () => {
  
  test('Debe de retornar a batman', () => {
    const getHero = getHerosById({id:'dc-batman'})

    expect(getHero.superhero).toBe('Batman');
  });
});
