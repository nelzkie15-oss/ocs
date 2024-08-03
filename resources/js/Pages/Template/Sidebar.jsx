import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import Logo from "@/Components/Image/ssss-removebg-preview.png";
function Sidebar() {
    const { auth } = usePage().props
  return (
   <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link href="/" className="brand-link">

        <span className="brand-text font-weight-light"><img src={Logo} /></span>
      </Link>
      <div className="sidebar">
        <div className="pb-3 user-panel d-flex">

          <div className="info">
            <a href="/" className="d-block" style={{ textTransform: 'capitalize' }}>{auth.user.name}</a>
          </div>
        </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-item menu-open">
              <Link href="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/rooms" className="nav-link" >
                <i className="nav-icon fas fa-bed"></i>
                <p>
                  Room
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={route('tenants')} className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>
                  Tenant
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={route('salereports')} className="nav-link">
                <i className="nav-icon fas fa-print"></i>
                <p>
                Sales Reports
                </p>
              </Link>
            </li>

            <li className="nav-item">
               <Link href={route('account')} className="nav-link">
               <i className="nav-icon fas fa-user"></i>
                <p>
                  Account
                </p>
              </Link>
            </li>

            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-print"></i>
                <p>
                  Sales Reports
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">

                <li className="nav-item">
                  <a href="pages/tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </a>
                </li>

              </ul>
            </li> */}

            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                    Account
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">

                <li className="nav-item">
                  <a href="pages/tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </a>
                </li>

              </ul>
            </li> */}

          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
