import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'

import { getHerosById } from '../../selectors/getHerosById';
import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = ({ history }) => {

  const {heroId} = useParams();
  const hero = useMemo(() => getHerosById({id: heroId}), [heroId]);

  if(!hero || hero.length === 0) {return <Redirect to="/"/>}

  const handleReturn = () => {
    if(history.length <= 2){
      history.push('/')
    } else {
      history.goBack();
    }

  } 

  const [{ superhero, publisher, alter_ego, first_appearance, characters }]  = hero;

  return (
    <div className="container mt-3">
      <button 
        className="btn btn-danger mb-4"
        onClick={ handleReturn }
      >
        Return
      </button>

      <div className="row">
        <div className="shadow-lg p-0 col-12 col-md-4 col-lg-3 animate__animated animate__backInLeft">
          <img 
            className="img-fluid rounded" 
            src={heroImages(heroId)} 
            alt={heroId}
          />
        </div>
        <div className="col text-center">
          <h3 className="display-4 mb-2">{ superhero } <small className="text-muted fs-4"> { publisher }&copy; </small> </h3>
          <p className="mb-4"> { alter_ego } - { first_appearance } </p>
          
          <h3 className="display-6 "> Characters </h3>
          <p> { characters } </p>
        </div>
      </div>
    </div>
  )
}
