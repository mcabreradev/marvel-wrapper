import { combineReducers } from 'redux';
import app from './appReducers';
import characters from './charactersReducers';

export default combineReducers({
    app,
    characters
});