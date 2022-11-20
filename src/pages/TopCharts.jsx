import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const style = {
  text: 'text-white font-bold text-3xl text-lef mt-4 mb-10',
  listSong: 'flex flex-wrap sm:justify-start justify-center gap-8',
};

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="Loading songs around you" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className={style.text}>Discover top charts</h2>
      <div className={style.listSong}>
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
            index={index}
            song={song}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
