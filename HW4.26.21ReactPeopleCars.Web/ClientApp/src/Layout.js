import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">React People Cars</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-light">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link to='/AddPerson' className="nav-link text-light">
                                        Add Person
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{marginTop: 75}}>
                {props.children}
            </div>
        </> 
    )
}