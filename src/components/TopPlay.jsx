import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import useSongCard from './hook/useSongCard';
import PlayPause from './PlayPause';

const style = {
  topChartWrapper:
    'xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col',
  wrapper: 'w-full flex flex-col',
  container: 'flex flex-row justify-between items-center',
  text: 'text-white font-bold text-2xl',
  paragraph: 'text-base text-gray-300 cursor-pointer',
  chartCard: 'flex flex-col mt-4 gap-1',
  card: 'w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2',
  artists: 'w-full flex flex-col mt-8',
  slide: 'rounded-full shadow-lg animate-slideright',
  image: 'rounded-full w-full object-cover',
  chartCardText: 'text-base font-bold text-white mr-3',
  chartCardContainer: 'flex-1 flex flex-row justify-between items-center',
  chartCardImage: 'w-20 h-20 rounded-lg',
  chartCardContent: 'flex-1 flex flex-col justify-between mx-3 gap-1',
  chartCardTitle: 'text-xl font-bold text-white hover:underline',
  chartCardSubtitle: 'text-base text-gray-300 hover:underline',
};

const TopChartCard = ({ song, index, isPlaying, activeSong, data }) => {
  const { handlePauseClick, handlePlayClick } = useSongCard(song, data, index);

  return (
    <div className={style.card}>
      <h3 className={style.chartCardText}>{index + 1}</h3>
      <div className={style.chartCardContainer}>
        <img
          className={style.chartCardImage}
          src={song?.images?.coverart}
          alt={song?.title}
        />
        <div className={style.chartCardContent}>
          <Link to={`/songs/${song.key}`}>
            <p className={style.chartCardTitle}>{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className={style.chartCardSubtitle}>{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        song={song}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

const TopPlay = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 5);

  // fix: not go to top when reload page
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div ref={divRef} className={style.topChartWrapper}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h2 className={style.text}>Top Charts</h2>
          <Link to="/top-charts">
            <p className={style.paragraph}>See more</p>
          </Link>
        </div>
        <div className={style.chartCard}>
          {topPlays?.map((song, index) => (
            <TopChartCard
              key={song.key}
              index={index}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          ))}
        </div>
        <div className={style.artists}>
          <div className={style.container}>
            <h2 className={style.text}>Top Artists</h2>
            <Link to="/top-artists">
              <p className={style.paragraph}>See more</p>
            </Link>
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            centeredSlides
            centeredSlidesBounds
            freeMode
            modules={[FreeMode]}
            className="mt-4"
          >
            {topPlays?.map((song, index) => (
              <SwiperSlide
                key={song.key}
                style={{ width: '20%', height: 'auto' }}
                className={style.slide}
              >
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img
                    src={song?.images.background}
                    alt="name"
                    className={style.image}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
