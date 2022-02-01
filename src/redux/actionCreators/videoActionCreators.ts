import {IGenre, IVideo} from '../../modals';
import * as actions from '../actionTypes/videoActionTypes';

export function setVideos(videos: IVideo[]): actions.SetVideosAction {
  return {
    type: actions.SET_VIDEOS,
    videos,
  };
}

export function setGenres(genres: IGenre[]): actions.SetGenresAction {
  return {
    type: actions.SET_GENRES,
    genres,
  };
}

export function searchByText(text: string): actions.SearchByTextAction {
  return {
    type: actions.SEARCH_BY_TEXT,
    text,
  };
}

export function filterByYears(
  minYear: number,
  maxYear: number,
): actions.FilterByYearsAction {
  return {
    type: actions.FILTER_BY_YEARS,
    minYear,
    maxYear,
  };
}

export function toggleGenre(genreId: number): actions.ToggleGenreAction {
  return {
    type: actions.TOGGLE_GENRE,
    genreId,
  };
}
