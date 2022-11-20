import { Link } from 'react-router-dom';
import useSongCard from './hook/useSongCard';
import PlayPause from './PlayPause';

const style = {
  wrapper:
    'flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer',
  container: 'relative w-full group h-56',
  card: 'absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex',
  content: 'mt-4 flex flex-col',
  songTitle: 'font-semibold text-lg text-white truncate',
  subtitle: 'text-sm truncate mt-1 text-gray-300',
};

const SongCard = ({ song, index, activeSong, isPlaying, data }) => {
  const { handlePauseClick, handlePlayClick } = useSongCard(song, data, index);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div
          className={`${style.card} ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            song={song}
          />
        </div>
        <img src={song.images?.coverart} alt="song-images" />
      </div>
      <div className={style.content}>
        <p className={style.songTitle}>
          <Link to={`/songs/${song?.key}`}>{song.title} </Link>
        </p>
        <p className={style.subtitle}>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : 'top/artists'
            }
          >
            {song.subtitle}{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
