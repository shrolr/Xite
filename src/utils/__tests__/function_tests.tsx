/**
 * @format
 */

import {filterByGenre, filterByYear, searchByText} from '..';
import {mockMusicVideos} from '../../constants/mockData';

// Given mock data does not have a song/artis with YUNG
it('should have an empty array ', () => {
  expect(searchByText(mockMusicVideos, 'YUNG')).toHaveLength(0);
});

// Given mock data have a song/artis with Beyoncé
it('should only return beyonces song ', () => {
  expect(searchByText(mockMusicVideos, 'Beyoncé')).toHaveLength(1);
});

it('should have 3 songs with given year 2013,2015 ', () => {
  expect(filterByYear(mockMusicVideos, 2013, 2015)).toHaveLength(3);
});

it('should not have a song with given year 2200,2300 ', () => {
  expect(filterByYear(mockMusicVideos, 2200, 2300)).toHaveLength(0);
});

// Filter By Genre
it('should have 1 songs with given input  ', () => {
  let selectedGenres = new Set<number>();
  selectedGenres.add(62);
  expect(filterByGenre(mockMusicVideos, selectedGenres)).toHaveLength(1);
});
