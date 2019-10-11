import carReducer from "./cars.reducer"
import peopleReducer from "./people.reducer"
import { combineReducers } from 'redux'

export default combineReducers({carReducer,peopleReducer});

