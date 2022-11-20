import React from 'react';
import { useSelector } from 'react-redux';
import useGetLocation from '../components/hook/useGetLocation';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import { Loader, Error, SongCard } from '../components';

const style = {
  text: 'text-white font-bold text-3xl text-lef mt-4 mb-10',
  listSong: 'flex flex-wrap sm:justify-start justify-center gap-8',
};

const CountryTracks = () => {
  const { country, loading } = useGetLocation();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  console.log(country);
  if (isFetching && loading) return <Loader title="Loading songs around you" />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className={style.text}>Around You</h2>
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

export default CountryTracks;
