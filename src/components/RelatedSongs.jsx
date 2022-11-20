import SongBar from './SongBar';

const style = {
  wrapper: 'flex flex-col',
  text: 'font-bold text-3xl text-white',
  listSong: 'mt-6 w-full flex flex-col',
};

const RelatedSongs = ({ data, isPlaying, activeSong, artistId }) => (
  <div className={style.wrapper}>
    <h1 className={style.text}>Related Songs</h1>
    <div className={style.listSong}>
      {data?.map((song, index) => (
        <SongBar
          key={`${song.key}-${artistId}-${index}`}
          index={index}
          song={song}
          data={data}
          isPlaying={isPlaying}
          artistId={artistId}
          activeSong={activeSong}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
