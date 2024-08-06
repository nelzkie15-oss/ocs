import React, { useState, useRef } from 'react';
import ContentWrapper from '../Template/ContentWrapper';
import { ToastContainer, toast } from 'react-toastify';
import style from "@/Components/Styles/style.css";
import { Link, router } from "@inertiajs/react";
import 'react-toastify/dist/ReactToastify.css';
import { pickBy } from "lodash";
import AddtenantModal from './Modal/AddtenantModal';
import EdittenantModal from './Modal/EdittenantModal';
import DeletetenantModal from './Modal/DeletetenantModal';
import { NumericFormat } from 'react-number-format';

function Tenants({ rooms, tenants }) {

  const perpage = useRef(rooms.per_page);
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isAddTenantModalOpen, setIsAddTenantModalOpen] = useState(false);
  const [isDeleteTenantModalOpen, setIsDeleteTenantModalOpen] = useState(false);
  const [isUpdateTenantModalOpen, setIsUpdateTenantModalOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState(null);

  const handlePageChange = (url) => {
    router.visit(url);
};

const handleChangePerpage = (e) => {
    perpage.current = e.target.value;
    getData();
};

const handleSearch = (e) => {
    e.preventDefault();
    getData();
};

const getData = () => {
    setisLoading(true);
    router.get(
        route().current(),
        pickBy({
            perpage: perpage.current,
            search: search,
        }),
        {
            preserveScroll: true,
            preserveState: true,
            onFinish: () => setisLoading(false),
        }
    );
};


  const handleOpenAddTenantModal = () => {
    setIsAddTenantModalOpen(true);
  };

  const handleCloseAddTenantModal = () => {
    setIsAddTenantModalOpen(false);
  };

  const handleOpenDeleteTenantModal = (tenant) => {
    setSelectedTenant(tenant);
    setIsDeleteTenantModalOpen(true);
  };

  const handleCloseDeleteTenantModal = () => {
    setIsDeleteTenantModalOpen(false);
    setSelectedTenant(null);
  };

  const handleOpenUpdateTenantModal = (tenant) => {
    setSelectedTenant(tenant);
    setIsUpdateTenantModalOpen(true);
  };

  const handleCloseUpdateTenantModal = () => {
    setIsUpdateTenantModalOpen(false);
    setSelectedTenant(null);
  };

  const handleDeleteTenant = () => {
    handleCloseDeleteTenantModal();
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'Php'
    }).format(value);

  return (
    <ContentWrapper header={<h1 className="m-0"><i className="nav-icon fas fa-users" style={{ color: '#525252' }}></i> Tenants</h1>}>
      <button type="button"
      className="mb-2 btn btn-primary"
      data-toggle="modal"
      data-target="#modal-addtenant"
      onClick={handleOpenAddTenantModal}>
        Add Tenant
      </button>
      <hr/>
      <ToastContainer />
      <div id="loader"></div>
      <div class="flex mt-3">
                <div class="w-1/1">
                    <select
                        className="form-control"
                        value={perpage.current}
                        onChange={handleChangePerpage}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="50">100</option>
                    </select>
                </div>
                <div class="w-1/2"></div>
                <div class="w-1/2">
                    <form
                        className="flex items-center max-w-sm mx-auto"
                        onSubmit={handleSearch}
                    >
                        <label for="simple-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="simple-search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search tenant name..."
                                required
                            />
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

                        <Link href="/tenants">
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
                    </form>
                </div>
      </div>

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tenants.data.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.id}</td>
                <td>{tenant.tenant_name}</td>
                <td>{tenant.tenant_cnumber}</td>
                <td>{tenant.tenant_email}</td>
                <td>{tenant.room_number}</td>
                <td>{tenant.start_date}</td>
                <td>{tenant.end_date ?  <span className="badge badge-info" style={{ color:'#d4d943' }}>{tenant.end_date}</span> : 'Ongoing'}</td>
                <td>{numberFormat(tenant.amount)} </td>
                <td>{tenant.payment_status === 'Paid' ? <span className="badge badge-success">Paid</span>: <span className="badge badge-warning text-light">UnPaid</span>}</td>
                <td>
                <div>
                  <div className='d-flex'>
                <div className='flex-1'>
                  <button
                     className="btn btn-primary btn-sm me-2"
                     data-toggle="modal"
                     data-target="#modal-edittenant"
                    onClick={() => handleOpenUpdateTenantModal(tenant)}
                  >
                    <i className="fas fa-pen"></i>
                  </button>
                  </div>
                  <div className='flex-1'></div>
                  <button
                    className="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#modal-deletetenant"
                    onClick={() => handleOpenDeleteTenantModal(tenant)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
        <ul className="pagination">
            {tenants.links.map((link, index) => (
            <li key={index} className={`page-item ${link.active ? 'active' : ''}`}>
                <Link
                href={link.url}
                className="page-link"
                dangerouslySetInnerHTML={{ __html: link.label }}
                />
            </li>
            ))}
        </ul>
       </nav>
      </div>

      {isAddTenantModalOpen && <AddtenantModal  onClose={handleCloseAddTenantModal} rooms={rooms} />}
      {isUpdateTenantModalOpen &&
         <EdittenantModal onClose={handleCloseAddTenantModal}
         tenant={selectedTenant}
         rooms={rooms}
     />}

      {isDeleteTenantModalOpen &&
         <DeletetenantModal onClose={handleCloseAddTenantModal}
         tenantId={selectedTenant?.id}
         TenantName={selectedTenant?.tenant_name}
     />}
    </ContentWrapper>
  );
}

export default Tenants;
