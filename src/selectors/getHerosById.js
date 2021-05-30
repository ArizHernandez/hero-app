import { heroes } from "../data/hero"

export const getHerosById = ({ id }) => {

  return heroes.filter( hero => hero.id === id );
}