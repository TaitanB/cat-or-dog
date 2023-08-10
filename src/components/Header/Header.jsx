import Nav from '../Header/Nav';

import { HeaderSection, HeaderContent } from './Header.styled';

export default function Header() {
  return (
    <HeaderSection id="Up">
      <HeaderContent>
        <Nav />
      </HeaderContent>
    </HeaderSection>
  );
}
