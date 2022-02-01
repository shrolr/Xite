import {filterByGenre, filterByYear, searchByText} from '../../utils';
import {RedusxAppState} from '../reducers/rootReducer';

const getFilterAttribute = (state: RedusxAppState) => state.videos;
const getGenres = (state: RedusxAppState) => state.videos.genres;
const getSelectedGenres = (state: RedusxAppState) =>
  state.videos.selectedGenres;

const getFilteredVideos = (state: RedusxAppState) => {
  const {videos, maxYear, minYear, selectedGenres, searchText} =
    getFilterAttribute(state);
  // creating set data structure for search optimizations
  const selectedGenresSet: Set<number> = new Set();
  selectedGenres.forEach(val => selectedGenresSet.add(val));
  return searchByText(
    filterByGenre(filterByYear(videos, minYear, maxYear), selectedGenresSet),
    searchText,
  );
};

export {getFilteredVideos, getGenres, getSelectedGenres};
