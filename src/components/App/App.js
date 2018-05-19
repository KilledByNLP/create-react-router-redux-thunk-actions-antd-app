import React from 'react'
import { Provider } from 'react-redux'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route } from 'react-router'

import * as Views from '../../views/'

import './App.css'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({ 
    router: routerReducer
  }),
  applyMiddleware(middleware),
)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Views.Home} />
        <Route path="/about" component={Views.About} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
