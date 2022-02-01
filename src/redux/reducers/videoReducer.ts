import config from '../../constants/config';
import {IGenre, IVideo} from '../../modals';
import * as actions from '../actionTypes/videoActionTypes';

export interface VideoState {
  minYear: number;
  maxYear: number;
  genres: IGenre[];
  videos: IVideo[];
  selectedGenres: number[];
  searchText: string;
}

const initialState: VideoState = {
  searchText: '',
  minYear: config.minYear,
  maxYear: config.maxYear,
  genres: [],
  videos: [],
  selectedGenres: [],
};

export default function VideoReducer(
  state: VideoState = initialState,
  action: actions.VideoAction,
): VideoState {
  switch (action.type) {
    case actions.SET_VIDEOS:
      return {
        ...state,
        videos: action.videos,
      };
    case actions.SET_GENRES:
      return {
        ...state,
        genres: action.genres,
      };
    case actions.FILTER_BY_YEARS:
      return {
        ...state,
        minYear: action.minYear,
        maxYear: action.maxYear,
      };
    case actions.SEARCH_BY_TEXT:
      return {
        ...state,
        searchText: action.text,
      };
    case actions.TOGGLE_GENRE:
      return {
        ...state,
        selectedGenres: state.selectedGenres.includes(action.genreId)
          ? state.selectedGenres.filter(id => id !== action.genreId)
          : [...state.selectedGenres, action.genreId],
      };
    default:
      return state;
  }
}
