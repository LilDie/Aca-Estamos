import  './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      
      {/* Navbar 2 */}
      <div className="container-fluid" style={{ backgroundColor: '#f2f7ea' }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid" style={{ backgroundColor: '#f2f7ea' }}>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#Nav2"
              aria-controls="Nav2" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="Nav2">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link" >Inicio</Link>
                </li>
                <li className="nav-item">
                <Link to="/cursos" className="nav-link">Cursos</Link>
                </li>
                <li>
                <Link to="/Nosotros"className="nav-link">Nosotros</Link>
                </li>
                <li className="nav-item">
                <Link to="/Contacto" className="nav-link">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    
    </>
  );
};

export default Navbar;
