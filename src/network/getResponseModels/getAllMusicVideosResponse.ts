import {Genre, Video} from '../../modals';

export interface IGetAllMusicVideosResponse {
  genres: Genre[];
  videos: Video[];
}
