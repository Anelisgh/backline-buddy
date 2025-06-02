import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search');
};

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src="https://cdn-icons-png.freepik.com/512/1449/1449589.png" alt="Logo" className="navbar-logo" />
                </Link>
            </div>

            <div className="navbar-center">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="Search" />
                    </button>
                </form>
            </div>

            <div className="navbar-right">
                <Link to="/notifications">
                        <img src="https://img.icons8.com/?size=100&id=82WJahgF7uQb&format=png&color=000000" alt="Notifications" className="navbar-icon"/>
                </Link>
                <Link to="/favorites">
                    <img src="https://img.icons8.com/?size=100&id=7697&format=png&color=000000" alt="Favorites" className="navbar-icon" />
                </Link>
                <Link to="/account">
                    <img src="https://img.icons8.com/?size=100&id=pETkiIKt6qBf&format=png&color=000000" alt="Account" className="navbar-icon" />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
