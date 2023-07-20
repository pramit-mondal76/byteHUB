import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
const Header = ({active, setActive}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="cntainer padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <button className='navbar-toggler mt-3' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'

              data-bs-parent='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='true'
              aria-label='Toggle navigation'>
              <span className='fa fa-bars'></span>

            </button>
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarSupportedContent'>
                <Link to="/"  style={{textDecoration:"none"}}>
                  <li className={`nav-item nav-link ${active==="home"?"active":" "}`} onClick={()=>setActive("home")} >
                    Home
                  </li>
                </Link>


                <li className="nav-item nav-link">
                  Create
                </li>


                <li className="nav-item nav-link">
                  About
                </li>

                
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item nav-link">
                    Login
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Header