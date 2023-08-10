import { FaHome, FaRegEye, FaHeart } from 'react-icons/fa';
import { offBlur } from '../../helpers/offBlur';
import { HeaderNav, HeaderNavLink } from './Header.styled';

export default function Nav() {
  return (
    <HeaderNav>
      <HeaderNavLink to="/" end onClick={offBlur}>
        <FaHome />
        Home
      </HeaderNavLink>
      <HeaderNavLink to="/favorites" onClick={offBlur}>
        <FaHeart />
        Favorites
      </HeaderNavLink>
      <HeaderNavLink to="/viewed" onClick={offBlur}>
        <FaRegEye />
        Viewed
      </HeaderNavLink>
    </HeaderNav>
  );
}
