import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHerosByName } from '../../selectors/getHerosByName';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { hero = '' } = queryString.parse( location.search );

  const [ { heroName }, handleInputChange ] = useForm({ 
    heroName: hero
  });
  
  const heroFilter = useMemo(() => getHerosByName({ name: hero }), [ hero ]);

  const handleSearch = (e) => {
    e.preventDefault();

    if( heroName === '' ){ return; }

    history.push(`?hero=${ heroName }`);
  }


  return (
    <div className="container">
      <h1 className="mt-3 text-center">Search Heros</h1>
      <hr className="mt-0"/>

      <div className="row">
        <div className="col-12 col-md-5 col-lg-4">
          <h3 className="text-center text-md-start">Search</h3>
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <input 
                className="form-control"
                type="search"
                name="heroName"
                placeholder="Hero Name"
                value={heroName}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-primary"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="col">
          <h3 className="text-center mt-4 mt-md-0">Results</h3>
          <div className="row">
              {
                hero === '' 
                ?
                  <p className="mt-3 text-center fs-4 text-muted"> Search a new hero, now!! </p>
                  :
                  heroFilter.length === 0 
                  ? 
                  <p className="mt-3 text-center fs-4 alert alert-danger"> Hero not found </p>
                  :
                    heroFilter.map( hero => {
                      return (
                        <div 
                          key={ hero.id }
                          className="col-8 col-md-5 mb-2 mx-auto"
                        >
                          <HeroCard
                            { ...hero }
                          />
                        </div>
                      )
                    })
              }
          </div>
        </div>
      </div>
    </div>
  )
}
