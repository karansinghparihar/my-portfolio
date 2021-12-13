import react from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

class Navbar extends react.Component {
    render() {
        return (
            <>
                <div className="container-fluid nav-bg">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <NavLink to='/' className="navbar-brand" href="#">Portfolio</NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to='/home' className="nav-link" activeClassName='menu-active'>Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/projects' className="nav-link" activeClassName='menu-active'>Projects</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/about' className="nav-link" activeClassName='menu-active'>About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/contact' className="nav-link" activeClassName='menu-active'>Contact</NavLink>
                                            </li>
                                            </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Navbar;