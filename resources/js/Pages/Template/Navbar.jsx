import React from 'react'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>

      </ul>

      <ul className="ml-auto navbar-nav">

        {/* <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="mr-2 fas fa-envelope"></i> 4 new messages
              <span className="float-right text-sm text-muted">3 mins</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="mr-2 fas fa-users"></i> 8 friend requests
              <span className="float-right text-sm text-muted">12 hours</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="mr-2 fas fa-file"></i> 3 new reports
              <span className="float-right text-sm text-muted">2 days</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li> */}


        <li className="nav-item">
          <ResponsiveNavLink method="post" href={route('logout')} as="button">
            <i className='mt-1 fas fa-arrow-circle-right'></i>&nbsp;Log Out
          </ResponsiveNavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

