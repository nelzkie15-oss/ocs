import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function ContentWrapper({ header, children }) {

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="mb-2 row">
              {header && (
                <div className="col-sm-6">
                  {header}
                </div>
              )}
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">

            <div>{children}</div>
          </div>
        </section>
      </div>
    </>

  )
}

export default ContentWrapper
