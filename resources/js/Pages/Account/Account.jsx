import React, { useState, useEffect, useRef } from "react";
import ContentWrapper from "../Template/ContentWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "@/Components/Styles/style.css";
import { Link, router } from "@inertiajs/react";
import { pickBy } from "lodash";
import AddaccountModal from "./Modal/AddaccountModal";
import EditaccountModal from "./Modal/EditaccountModal";
import DeleteaccountModal from "./Modal/DeleteaccountModal";

function Account({ accounts }) {

    const perpage = useRef(accounts.per_page);
    const [search, setSearch] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState("");

    const handlePageChange = (url) => {
        router.visit(url);
    };

    const handleOpenAccountModal = () => {
        setIsAccountModalOpen(true);
    };

    const handleCloseAccountModal = () => {
        setIsAccountModalOpen(false);
    };

    const handleOpenDeleteModal = (account) => {
        setSelectedAccount(account);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedAccount(null);
    };

    const handleDeleteAccount = () => {
        if (selectedAccount) {
            handleCloseDeleteModal();
        }
    };

    const handleOpenUpdateModal = (account) => {
        setSelectedAccount(account);
        setIsUpdateModalOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedAccount(null);
    };

    const handleUpdateAccount = () => {
        if (selectedAccount) {
            handleCloseUpdateModal();
        }
    };


    return (
        <ContentWrapper header={<h1 className="m-0"><i className="nav-icon fas fa-user" style={{ color: '#525252' }}></i> Accounts</h1>}>
       <button
                type="button"
                className="mb-2 btn btn-primary"
                data-toggle="modal"
                data-target="#modal-addaccount"
            >
                Add Room
            </button>
            <hr />
            <AddaccountModal />
            <ToastContainer />
            <div id="loader"></div>
      <div className="mt-3 table-responsive">
          <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>password</th> */}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.data.map((acount) => (
              <tr key={acount.id}>
                <td>{acount.id}</td>
                <td>{acount.uname}</td>
                <td>{acount.email}</td>
                {/* <td>{acount.password}</td> */}
                <td>{acount.status === 'active' ? <span className="badge badge-success">Active</span>: <span className="badge badge-warning text-light">Inactive</span>}</td>
                <td>
                  <button
                     className="btn btn-primary btn-sm me-2"
                     data-toggle="modal"
                     data-target="#modal-editaccount"
                    onClick={() => handleOpenUpdateModal(acount)}
                  >
                    <i className="fas fa-pen"></i>
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#modal-deleteaccount"
                    onClick={() => handleOpenDeleteModal(acount)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
            <ul className="pagination">
                {accounts.links.map((link, index) => (
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

          {isAccountModalOpen && <AddaccountModal onClose={handleCloseAccountModal} />}

            {isUpdateModalOpen && (
                <EditaccountModal
                account={selectedAccount}
                    onClose={handleCloseUpdateModal}
                />
            )}

            {isDeleteModalOpen &&
                <DeleteaccountModal onClose={handleCloseAccountModal}
                AccountId={selectedAccount?.id}
                AccountName={selectedAccount?.uname}
            />}

        </ContentWrapper>


    );
}

export default Account;
