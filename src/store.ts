import rootReducer from './reducers'
import { render } from 'react-dom'
import { createStore } from 'redux'

export const store = createStore(rootReducer)
