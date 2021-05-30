import { heroes } from "../data/hero"

export const getHerosByName = ({ name = '' }) => {

  if( name === '' ){ return []; }

  name = name.toLowerCase();
  return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) || hero.characters.toLowerCase().includes( name ) || hero.publisher.toLowerCase().includes( name ) )
}
