import { useAuth } from '../context/AuthContext';
import MainBody from './MainBody';
import LoggedInBody from './LoggedInBody';

function Body() {
  const { currentUser } = useAuth();

  if(!currentUser) {
    return(
      <MainBody />
    );
  } else {
    return( 
      <LoggedInBody />
    );
  }
}

export default Body;