import { heroes } from "../data/hero"

export const getHerosByPublisher = ({ publisher }) => {
  const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

  if( !validPublishers.includes( publisher ) ) { throw new Error(`Publisher ${ publisher } no son correcto`)} ;

  return heroes.filter( hero => hero.publisher === publisher );
}