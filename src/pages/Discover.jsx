import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import { Error, Loader, SongCard } from '../components';
import { useGetChartByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';

const style = {
  wrapper: 'flex flex-col',
  container:
    'w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10',
  text: 'font-bold text-3xl text-white text-left',
  select:
    'bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5',
  listSongCard: 'flex flex-wrap sm:justify-start justify-center gap-8',
};

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player,
  );
  const { data, isFetching, error } = useGetChartByGenreQuery(
    genreListId || 'POP',
  );
  const genreTitle = genres.find((genre) => genre.value === genreListId)?.title;
  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.text}>Discover {genreTitle}</h2>
        <select
          className={style.select}
          value={genreListId || 'pop'}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className={style.listSongCard}>
        {data?.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            index={index}
            data={data}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
