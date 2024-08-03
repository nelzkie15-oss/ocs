import React, { useState, useRef } from 'react';
import ContentWrapper from '../Template/ContentWrapper';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, router, usePage  } from '@inertiajs/react'
import style from "@/Components/Styles/style.css";

function Tenantstatus2({paidRecords}) {

    const props = usePage().props

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'Php'
        }).format(value);


  return (
    <ContentWrapper header={<h1 className="m-0"><i className="nav-icon fas fa-users" style={{ color: '#525252' }}></i> Tenant Status</h1>}>
     <ToastContainer />
     <div id="loader"></div>

    <div className="mt-3 table-responsive">
    <table className="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Room#</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Amount</th>
            <th>Payment Status</th>

        </tr>
        </thead>
        <tbody>
        {paidRecords.map((paidRecord) => (
            <tr key={paidRecord.id}>
            <td>{paidRecord.id}</td>
            <td>{paidRecord.tenant_name}</td>
            <td>{paidRecord.tenant_cnumber}</td>
            <td>{paidRecord.tenant_email}</td>
            <td>{paidRecord.room_number}</td>
            <td>{paidRecord.start_date}</td>
            <td>{paidRecord.end_date ?  <span className="badge badge-info" style={{ color:'#d4d943' }}>{paidRecord.end_date}</span> : 'Ongoing'}</td>
            <td>{numberFormat(paidRecord.amount)} </td>
            <td>{paidRecord.payment_status === 'Paid' ? <span className="badge badge-success">Paid</span>: <span className="badge badge-warning text-light">UnPaid</span>}</td>

            </tr>
        ))}
        </tbody>
    </table>
    {/* <div className="mb-3 pagination">
                {paidRecord.links.map((link, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(link.url)}
                        disabled={!link.url || link.active}
                        className={link.active ? "active" : ""}
                    >
                        {link.label}
                    </button>
                ))}
            </div> */}
    </div>
    </ContentWrapper>
  );
}

export default Tenantstatus2;
