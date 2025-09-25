import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div id='bodycontainer'>
       <nav id='Header' className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid" id='container-fluid'>
          <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1758216978/ViewPriceLogo_mkbzfe.png" alt=""/></a>
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link active">Saved</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1758220955/cartLogo_g2v56p.png" alt="" /></a>
                <button id='signupBtn' className="btn btn-outline-success" type="submit">Sign Up</button>
            </form>
            </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar
