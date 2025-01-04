import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//lets us create a feature when user click on button it navigate to another page
//we can use Link to navigate to different pages

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src="" alt="" />
      <ul>
        <Link to='/' ><li>Home</li></Link>
        <Link to='/aboutus' ><li>About</li></Link>
        <Link to='/contactus' ><li>Contact us</li></Link>
        {/* //we have to use Link to navigate to different pages
        //to in link and path in route should be same */}

        {//we can also use NavLink instead of Link}
        //NavLink is used to show the active link
        //NavLink has active class by default
        //NavLink has activeStyle property to style the active link
        //NavLink has activeClassName property to give custom class to active link
        }

        <button onClick={() => navigate('/aboutus')}>Get started</button>
      </ul>
    </div>
  );
}

export default Navbar;
