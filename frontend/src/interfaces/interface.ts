//Song Interfaces

export interface SongStatistics {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsByGenre: { _id: string; count: number }[];
  songsByArtist: { _id: string; count: number }[];
  songsByAlbum: { _id: string; count: number }[];
}

export interface SongState {
  songs: Song[];
  loading: boolean;
  statistics: SongStatistics | null;
}

export const initialState: SongState = {
  songs: [],
  loading: false,
  statistics: null,
};

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}
export interface CreateSong {
  title: string;
  artist: string;
  album: string;
  genre: string;
}
