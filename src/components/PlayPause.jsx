import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const style = {
  icon: 'text-gray-300',
};

const PlayPause = ({
  activeSong,
  isPlaying,
  song,
  handlePause,
  handlePlay,
}) => (
  <div>
    {isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle size={35} className={style.icon} onClick={handlePause} />
    ) : (
      <FaPlayCircle size={35} className={style.icon} onClick={handlePlay} />
    )}
  </div>
);

export default PlayPause;
