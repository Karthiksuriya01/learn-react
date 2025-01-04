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

        
      </ul>
    </div>
  );
}

export default Navbar;
