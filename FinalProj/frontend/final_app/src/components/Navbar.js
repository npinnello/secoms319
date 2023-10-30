import React from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () =>{

    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
                    <div className="container-fluid">
                    <img src="./images/YardLogo NEW LOGO.png" width="100" height="60"alt="logo" style={{"margin": "3px"}}></img>
                    <a className="navbar-brand text-black" href="./gallery" style={{"margin": ".5em"}}>Gallery</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active text-black" aria-current="page" href="./contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="./reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href = "./about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black" href="./" style={{"textAlign":"right"}}>Home</a>
                        </li>
                        
                        </ul>
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit" value={"Search"}></button>
                        </form>
                    </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;