import { CiSearch } from 'react-icons/ci';
import { UseMainContext } from '../../../Context/MainContext';

const SearchField = () => {
  const { inputRef } = UseMainContext();

  return (
    <div className="searchField">
      <CiSearch size={20} />
      <input type="text" placeholder="Поиск" className="" ref={inputRef} />
    </div>
  );
};

export default SearchField;
