import { loader } from '../assets';

const style = {
  wrapper: 'w-full flex justify-center items-center flex-col',
  img: 'w-32 h-32 object-contain',
  text: 'font-bold text-2xl text-white mt-2',
};
const Loader = ({ title }) => (
  <div className={style.wrapper}>
    <img src={loader} alt="loader" className={style.img} />
    <h1 className={style.text}>{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
