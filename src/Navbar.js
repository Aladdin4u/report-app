import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
          <h1>Report App</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Create Report</Link>
          </div>
        </nav>
     );
}
 
export default Navbar;