import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import {
  useGetRelatedSongsQuery,
  useGetSongDetailsQuery,
} from '../redux/services/shazamCore';

const style = {
  wrapper: 'flex flex-col',
  text: 'text-white text-3xl font-bold',
  lyrics: 'text-base text-gray-400 my-1',
};

const SongDetails = () => {
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetRelatedSongsQuery(songid);
  if (isFetchingRelatedSongs || isFetchingSongDetails)
    return <Loader title="Searching song details" />;
  if (error) return <Error />;
  return (
    <div className={style.wrapper}>
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className={style.text}>Lyrics</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((line, index) => (
              <p className={style.lyrics} key={index}>
                {line}
              </p>
            ))
          ) : (
            <p className={style.lyrics}>Coming soon</p>
          )}
        </div>
      </div>
      <RelatedSongs data={data} isPlaying={isPlaying} activeSong={activeSong} />
    </div>
  );
};

export default SongDetails;
