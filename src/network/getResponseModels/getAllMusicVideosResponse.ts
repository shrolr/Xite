import {IGenre, IVideo} from '../../modals';

export interface IGetAllMusicVideosResponse {
  genres: IGenre[];
  videos: IVideo[];
}
