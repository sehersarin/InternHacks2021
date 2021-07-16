import { useAuth } from '../context/AuthContext';
import MainHeader from './MainHeader';
import MenteeLoginHeader from './Mentees/MenteeLoginHeader';

function Header() {
  const { currentUser } = useAuth();

  if(!currentUser) {
    return(
      <MainHeader />
    );
  } else {
    return( 
      <MenteeLoginHeader />
    );
  }
}

export default Header;