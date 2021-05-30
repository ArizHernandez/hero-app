import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import { HeroCard } from './HeroCard'

export const HerosList = ({ publisher }) => {

  const heroes = useMemo(() => getHerosByPublisher({ publisher }), [ publisher ]);

  return (
    <div className="card-group">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        { 
          heroes.map( hero => {
            return (
            <div 
              className=" animate__animated animate__fadeIn"
              key={ hero.id }
            >
              <HeroCard { ...hero }/>
            </div>
            )}
          ) 
        }
      </div>
    </div>
  )
}
