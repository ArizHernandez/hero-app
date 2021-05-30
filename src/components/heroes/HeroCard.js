import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'

export const HeroCard = ({ 
  alter_ego,
  characters,
  first_appearance,
  id,
  superhero
}) => {

  return (
    <div className="card text-center">
      <img 
        src={heroImages(id)} 
        className="card-img-top" 
        alt="..." 
      />

      <div className="card-body">
        <h5 className="card-title">{ superhero }</h5>
        <p className="card-text hero-name">
          {
            ( alter_ego !== characters )
            ? characters
            : alter_ego 
          }
        </p> 
        <p className="card-text text-end mb-2">
          <small className="text-muted">{ first_appearance }</small>
        </p>

        <Link
          to={`./hero/${ id }`}
          className="btn btn-dark btn-block"
        >
          Mas...
        </Link>
      </div>
    </div>
  )
}
