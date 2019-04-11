import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import { combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux'

import { hashHistory, IndexRedirect, Route, Router } from 'react-router'

import Application from './src/containers/Application'
import Points from './src/containers/Points'
import Offers from './src/containers/Offers'
import Rewards from './src/containers/Rewards'

import points from './src/reducers/points'
import offers from './src/reducers/offers'
import rewards from './src/reducers/rewards'

import routes from './src/constants/routeNames'


import './index.css'

const store = createStore(combineReducers({ points, offers, rewards }),
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRedirect to={`/${routes.POINTS}`} />
        <Route path={routes.POINTS} component={Points} />
        <Route path={routes.OFFERS} component={Offers} />
        <Route path={routes.REWARDS} component={Rewards} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
