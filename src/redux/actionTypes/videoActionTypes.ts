import {IGenre, IVideo} from '../../modals';

export const SET_VIDEOS = 'SET VIDEOS';
export interface SetVideosAction {
  type: typeof SET_VIDEOS;
  videos: IVideo[];
}

export const SET_GENRES = 'SET GENRES';
export interface SetGenresAction {
  type: typeof SET_GENRES;
  genres: IGenre[];
}

export const SEARCH_BY_TEXT = 'SEARCH BY TEXT';
export interface SearchByTextAction {
  type: typeof SEARCH_BY_TEXT;
  text: string;
}

export const FILTER_BY_YEARS = 'FILTER BY YEARS';
export interface FilterByYearsAction {
  type: typeof FILTER_BY_YEARS;
  minYear: number;
  maxYear: number;
}

export const TOGGLE_GENRE = 'TOGGLE GENRE';
export interface ToggleGenreAction {
  type: typeof TOGGLE_GENRE;
  genreId: number;
}

export type VideoAction =
  | SetVideosAction
  | SetGenresAction
  | SearchByTextAction
  | FilterByYearsAction
  | ToggleGenreAction;
