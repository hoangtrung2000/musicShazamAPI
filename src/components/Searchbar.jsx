import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import useSearch from './hook/useSearch';

const style = {
  form: 'text-gray-400 focus-within:text-gray-600',
  search: 'flex flex-row justify-start items-center',
  icon: 'w-5 h-5 ml-4',
  input:
    'flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white',
};
const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { handleSubmit } = useSearch(searchValue);
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={style.form}>
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className={style.search}>
        <FiSearch className={style.icon} />
        <input
          type="search"
          name="search-field"
          id="search-field"
          autoComplete="off"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={style.input}
        />
      </div>
    </form>
  );
};
export default Searchbar;
