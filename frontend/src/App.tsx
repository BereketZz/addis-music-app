// App.tsx
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { fetchSongsRequest, createSongRequest, updateSongRequest, deleteSongRequest, fetchStatisticsRequest } from './songs/songSlice';
import SongModal from './components/SongModal';
import StatCard from './components/StatCard';
import styled from '@emotion/styled';
import diskImage from './assets/disk.png';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/style.css"


//Styles

const Container = styled.div`
  padding: 20px;
`;

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const SongCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  position: relative;
`;

const SongImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const SecondButton= styled.button`
width:40px;
height:40px;
border-radius:50%;
background-color:#f0f0f0;
border:none;
color:#333333;
margin-left:5px;
&:hover{
cursor:pointer;
}
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SelectDropdown = styled.select`
  padding: 10px ;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 22px;
`;

const StatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;



const StatItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 auto;
  min-width: 150px;
  text-align: center;
`;

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const songs = useSelector((state: RootState) => state.songs.songs);
  const loading = useSelector((state: RootState) => state.songs.loading);
  const [newSong, setNewSong] = useState({ _id: '', title: '', artist: '', album: '', genre: '' });
  const statistics = useSelector((state: RootState) => state.songs.statistics);

  const [isEditing, setIsEditing] = useState(false); // Track whether we're editing a song
  const [isModalOpen, setIsModalOpen] = useState(false); // Track whether the modal is open
  const [selectedStat, setSelectedStat] = useState<'all' | 'genre' | 'artist' | 'album'>('all');

  useEffect(() => {
    dispatch(fetchSongsRequest());
    dispatch(fetchStatisticsRequest());
  }, [dispatch]);

  //Handle song create and update function
  const handleCreateSong = () => {
    if (newSong.title && newSong.artist && newSong.album && newSong.genre) {
      const songToDispatch = {
        title: newSong.title,
        artist: newSong.artist,
        album: newSong.album,
        genre: newSong.genre,
      };

      if (isEditing) {
        dispatch(updateSongRequest({ ...songToDispatch, _id: newSong._id })); // Only assign id during update
        setIsEditing(false);
      } else {
        dispatch(createSongRequest(songToDispatch)); 
      }

      setNewSong({ _id: '', title: '', artist: '', album: '', genre: '' });
      setIsModalOpen(false);
    }
  };

  //Handle song update seting the newsong state with the selected song data
  const handleEditSong = (song: typeof newSong) => {
    setNewSong(song); 
    setIsEditing(true); 
    setIsModalOpen(true); 
  };

//Handle Delete function
  const handleDeleteSong = (_id: string) => {
    dispatch(deleteSongRequest(_id)); 
  };

  const renderStatCard = () => {
    switch (selectedStat) {
      case 'genre':
        return (
          <StatCard title="Songs by Genre">
            <StatContainer>
              {statistics?.songsByGenre?.map((genre) => (
                <StatItem key={genre._id}>
                  {genre._id}: {genre.count}
                </StatItem>
              ))}
            </StatContainer>
          </StatCard>
        );
      case 'artist':
        return (
          <StatCard title="Songs by Artist">
            <StatContainer>
              {statistics?.songsByArtist?.map((artist) => (
                <StatItem key={artist._id}>
                  {artist._id}: {artist.count}
                </StatItem>
              ))}
            </StatContainer>
          </StatCard>
        );
      case 'album':
        return (
          <StatCard title="Songs by Album">
            <StatContainer>
              {statistics?.songsByAlbum?.map((album) => (
                <StatItem key={album._id}>
                  {album._id}: {album.count}
                </StatItem>
              ))}
            </StatContainer>
          </StatCard>
        );
      case 'all':
      default:
        return (
          <StatCard title="All Songs Statistics">
          <StatContainer>
            <StatItem>Total Songs: {statistics?.totalSongs}</StatItem>
            <StatItem>Total Artists: {statistics?.totalArtists}</StatItem>
            <StatItem>Total Albums: {statistics?.totalAlbums}</StatItem>
            <StatItem>Total Genres: {statistics?.totalGenres}</StatItem>
          </StatContainer>
        </StatCard>
        );
    }
  };

  return (
    <>
    <Header/>
    <Container>
      <h1>Song List</h1>
      <Button onClick={() => setIsModalOpen(true)}> 
Create New Song </Button>
      <SelectDropdown onChange={(e) => setSelectedStat(e.target.value as 'all' | 'genre' | 'artist' | 'album')}>
        <option value="all">All Songs</option>
        <option value="genre">Genre</option>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
      </SelectDropdown>

      {loading && (
  <div className="overlay">
    <span className="loader"></span>
  </div>
)}
      {renderStatCard()}

      <SongGrid>
        {songs.map((song) => (
          <SongCard key={song._id}>
            <SongImage src={diskImage} alt="Song"  width={100} height={100}/>
            <h3>{song.title}</h3>
            <p>by {song.artist}</p>
            <p>from the album "{song.album}"</p>
            <p>Genre: {song.genre}</p>
            <SecondButton onClick={() => handleEditSong(song)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</SecondButton>
            <SecondButton onClick={() => handleDeleteSong(song._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</SecondButton>
          </SongCard>
        ))}
      </SongGrid>

      <SongModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleCreateSong}
        newSong={newSong}
        setNewSong={setNewSong}
        isEditing={isEditing}
      />
    </Container>
    <br/><br/>
    <Footer/>
    </>

  );
};

export default App;
