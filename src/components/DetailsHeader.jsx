import { Link } from 'react-router-dom';

const style = {
  wrapper: 'relative w-full flex flex-col',
  container: 'w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28',
  content: 'absolute inset-0 flex items-center',
  image:
    'sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black',
  title: 'font-bold sm:text-3xl text-xl text-white',
  subTitle: 'text-base text-gray-400 mt-2 ',
};
const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId].attributes;
  return (
    <div className={style.wrapper}>
      <div className={style.container} />
      <div className={style.content}>
        <img
          src={
            artistId
              ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
          }
          alt="song name"
          className={style.image}
        />
        <div className="ml-5">
          <p className={style.title}>
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className={`${style.subTitle} hover:underline`}>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className={style.subTitle}>
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
