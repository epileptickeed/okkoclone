import { UseMainContext } from '../../../Context/MainContext';

const SearchField = () => {
  const { inputRef } = UseMainContext();

  return (
    <div className="searchField">
      <input type="text" placeholder="Поиск" className="" ref={inputRef} />
    </div>
  );
};

export default SearchField;
