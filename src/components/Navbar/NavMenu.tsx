import { Link } from 'react-router-dom';
import nav from '../../../data/nav.json';

const NavMenu = () => {
  return (
    <div className="navmenu">
      {nav.map((item) => {
        return (
          <Link key={item.id} to={item.link}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavMenu;
