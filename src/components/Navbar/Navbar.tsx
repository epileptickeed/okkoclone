import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import SearchField from './SearchField';
import NavMenu from './NavMenu';
import { UseMainContext } from '../../../Context/MainContext';
import { setSearchActive } from '../../../redux/Slices/Nav/NavSlices';

const Navbar = () => {
  const { handleInputVisible, searchActive, dispatch } = UseMainContext();

  return (
    <header className="navbar">
      <nav className={searchActive ? 'linksActive' : 'links'}>
        <Link to={'/'}>
          <img src={'/logo.png'} alt="" />
        </Link>
        {searchActive ? <SearchField /> : <NavMenu />}
      </nav>
      <nav className="search">
        {searchActive ? (
          <IoMdClose
            className="searchBtn"
            size={25}
            onClick={() => dispatch(setSearchActive(!searchActive))}
          />
        ) : (
          <CiSearch className="searchBtn" size={25} onClick={() => handleInputVisible()} />
        )}

        <Link to={'profile'}>
          <CgProfile size={25} />
          Войти
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
