import ContentWrapper from './Template/ContentWrapper';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import style from "@/Components/Styles/style.css";

export default function Dashboard({ rooms, tenants, paidRecords, unpaidRecords}) {
  return (
    <ContentWrapper header={<h1 className="m-0">Dashboard</h1>} >
     <div id="loader"></div>
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
                <h3 style={{fontSize:"4rem"}}> {rooms}</h3>
              <p>Total Rooms</p>
            </div>
            <div className="icon">
              <i className="ion-android-home"></i>
            </div>
            <Link href={route('rooms')} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3> {tenants}</h3>
              <p>Total Tenants</p>
            </div>
            <div className="icon">
              <i className="ion-android-contacts"></i>
            </div>
            <Link href={route('tenants')} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{paidRecords}</h3>

              <p>Total Paid (<i style={{fontSize:'12px'}}>this month</i>)</p>
            </div>
            <div className="icon">
              <i className="ion-cash"></i>
            </div>
            <Link href={route('tenantstatus')} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{unpaidRecords}</h3>

              <p>Total Not Paid (<i style={{fontSize:'12px'}}>this month</i>)</p>
            </div>
            <div className="icon">
              <i className="ion-cash"></i>
            </div>
            <Link href={route('tenantstatus2')} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
      </div>

    </ContentWrapper>
  );
}
