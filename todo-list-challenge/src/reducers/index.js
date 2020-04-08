import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const Reducers = combineReducers({
    todos,
    visibilityFilter
});

export default Reducers;