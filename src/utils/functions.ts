import {IVideo} from '../modals';

const getGenreName = (Genres: Map<number, string>, id: number) => {
  if (Genres.has(id)) {
    return Genres.get(id);
  }
  return '';
};

const searchByText = (videos: IVideo[], searchText: string) => {
  return videos.filter(
    video =>
      video.artist.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
      video.title.toString().toLowerCase().includes(searchText.toLowerCase()),
  );
};

const filterByYear = (videos: IVideo[], minYear: number, maxYear: number) => {
  return videos.filter(
    video => video.release_year >= minYear && video.release_year <= maxYear,
  );
};

const filterByGenre = (videos: IVideo[], selectedGenres: Set<number>) => {
  if (selectedGenres.size > 0) {
    return videos.filter(video => selectedGenres.has(video.genre_id));
  }
  return videos;
};

export {getGenreName, searchByText, filterByYear, filterByGenre};
