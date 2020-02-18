import { createStore, applyMiddleware } from 'redux'
import { AppReducers } from './reducers'
import logger from 'redux-logger'





export const store = createStore(AppReducers, applyMiddleware(logger))