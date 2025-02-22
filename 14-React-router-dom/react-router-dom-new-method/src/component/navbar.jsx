import {Link} from 'react-router-dom';
const Navbar = () => {
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
      </ul>
    </div>
  );
}

export default Navbar;
