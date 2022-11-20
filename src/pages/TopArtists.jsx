import React from 'react';
import { Loader, Error, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const style = {
  text: 'text-white font-bold text-3xl text-lef mt-4 mb-10',
  listSong: 'flex flex-wrap sm:justify-start justify-center gap-8',
};

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="Loading songs around you" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className={style.text}>Top artists</h2>
      <div className={style.listSong}>
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
