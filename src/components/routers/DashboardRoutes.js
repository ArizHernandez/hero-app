import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Navbar } from '../ui/Navbar'
import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from '../heroes/HeroScreen'
import { MarvelScreen } from '../Marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>

      <div>
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen }/>
          <Route exact path="/dc" component={ DcScreen }/>
          <Route exact path="/hero/:heroId" component={ HeroScreen }/>
          <Route exact path="/search" component={ SearchScreen }/>
          <Redirect to="/marvel"/>
        </Switch>
      </div>
    </>
  )
}
