import {combineReducers} from 'redux';
import videosReducer from './videoReducer';

const rootReducer = combineReducers({
  videos: videosReducer,
});

export type RedusxAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
