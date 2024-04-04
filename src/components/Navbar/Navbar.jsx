import '../Navbar/Navbar.css'
import Logo from '../../assets/logoG.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <header className="navbar">
        <div className="logo">
          <Link to="/overview">
            <img className='img-logo' src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
            <li><Link to="/favorite">Favorites</Link></li>
          </ul>
        </nav>
        <Link to="/newUser" ><button className="btn-new" > + New </button></Link>
      </header>
    );
  }
  

export default Navbar;
