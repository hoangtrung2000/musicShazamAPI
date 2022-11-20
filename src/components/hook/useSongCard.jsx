import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';

const useSongCard = (song, data, index) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };
  return { handlePauseClick, handlePlayClick };
};

export default useSongCard;
