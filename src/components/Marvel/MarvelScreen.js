import React from 'react'
import { HerosList } from '../heroes/HerosList'

export const MarvelScreen = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center">Marve Screen</h1>
      <hr className="mt-0 mb-4"/>
      <HerosList publisher="Marvel Comics"/>
    </div>
  )
}
