import { useNavigate } from 'react-router-dom';

const useSearch = (searchValue) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };
  return { handleSubmit };
};

export default useSearch;
