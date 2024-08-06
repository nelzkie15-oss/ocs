import React, { useEffect, useState, useRef } from 'react';
import ContentWrapper from '../Template/ContentWrapper';
import { ToastContainer, toast } from 'react-toastify';
import { Link, router, useForm, usePage } from "@inertiajs/react";
import style from "@/Components/Styles/style.css";

function Salesreport({results }) {

    const [toStatus, setStatus] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');


    const handlePageChange = (url) => {
        router.visit(url);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        router.get('/salereports', { payment_status: toStatus, date_from: fromDate, date_to: toDate });
    };

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'Php'
        }).format(value);

    const tableRef = useRef(null);

    const printTable = () => {
      const tableContents = tableRef.current.outerHTML;
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Sales Report</title>');
      printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; }</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(tableContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    };

  return (
    <ContentWrapper header={<h1 className="m-0"><i className="nav-icon fas fa-print" style={{ color: '#525252' }}></i> Sales Report</h1>}>
      <ToastContainer />
      <div id="loader"></div>
        <form
            onSubmit={handleSubmit}
            className="flex items-center mx-auto mb-2 w-100"
        >

     <span className="mx-4 text-gray-500">Status</span>
     <select
               value={toStatus}
               onChange={(e) => setStatus(e.target.value)}
              className="w-22 text-sm text-gray-900 border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="">&larr; Select Status &rarr;</option>
            <option value="Paid">Paid</option>
            <option value="UnPaid">UnPaid</option>
        </select>



   <div id="date-range-picker" date-rangepicker className="flex items-center">
    <span className="mx-4 text-gray-500">From</span>
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-6 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input id="date_from"
              name="date_from"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
         {/* {errors.date_from && <div className="text-danger">{errors.date_from}</div>} */}
        </div>
        <span className="mx-4 text-gray-500">to</span>
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-6 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input id="date_to"
              name="date_to"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
         {/* {errors.date_from && <div className="text-danger">{errors.date_from}</div>} */}
        </div>
    </div>

    <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
        </svg>
        <span className="sr-only">Search</span>
    </button>

    <Link href="/salereports">
        {" "}
        <button
            type="submit"
            class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                ></path>
            </svg>
            Clear
        </button>
    </Link>
    <button  onClick={printTable} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2 mt-2 ml-1 text-center me-2 mb-2"><i className="fas fa-print"></i> Print</button>
</form>


    <hr />

<div className="mt-3 table-responsive" ref={tableRef}>
       <center><h3 style={{fontSize:"2rem", fontWeight:"bold"}}>SALES REPORT</h3></center>
        <table className="table">
          <thead>
            <tr>
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
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.tenant_name}</td>
                <td>{result.tenant_cnumber}</td>
                <td>{result.tenant_email}</td>
                <td>{result.room_number}</td>
                <td>{result.start_date}</td>
                <td>{result.end_date ?  <span className="badge badge-info" style={{ color:'#d4d943' }}>{result.end_date}</span> : 'Ongoing'}</td>
                <td>{numberFormat(result.amount)} </td>
                <td>{result.payment_status === 'Paid' ? <span className="badge badge-success">Paid</span>: <span className="badge badge-warning text-light">UnPaid</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="mb-3 pagination">
            {results.links.map((link, index) => (
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

export default Salesreport;
