import { NavigLink, Navig } from './Navigation.styled';

const Navigation = () => (
  <Navig>
    <NavigLink exact to="/">
      Home
    </NavigLink>
    <NavigLink to="/movies">Movies</NavigLink>
  </Navig>
);

export default Navigation;
