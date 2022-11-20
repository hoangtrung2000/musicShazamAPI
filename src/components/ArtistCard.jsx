import { useNavigate } from 'react-router-dom';

const style = {
  wrapper:
    'flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer group',
  image: 'w-full h-56 rounded-lg',
  text: 'mt-4 text-lg font-semibold text-white truncate group-hover:underline',
};

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div
      className={style.wrapper}
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        src={track?.images?.coverart}
        alt="top-artists"
        className={style.image}
      />
      <p className={style.text}>{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
