import React, { useState, useEffect, useRef } from "react";
import ContentWrapper from "../Template/ContentWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddroomModal from "./modal/AddroomModal";
import EditroomModal from "./modal/EditroomModal";
import DeleteroomModal from "./modal/DeleteroomModal";
import style from "@/Components/Styles/style.css";
import { Link, router } from "@inertiajs/react";
import { pickBy } from "lodash";

function Rooms({ rooms }) {
    const perpage = useRef(rooms.per_page);
    const [search, setSearch] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState("");

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

    const handleOpenRoomModal = () => {
        setIsRoomModalOpen(true);
    };

    const handleCloseRoomModal = () => {
        setIsRoomModalOpen(false);
    };

    const handleOpenDeleteModal = (room) => {
        setSelectedRoom(room);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedRoom(null);
    };

    const handleDeleteRoom = () => {
        if (selectedRoom) {
            handleCloseDeleteModal();
        }
    };

    const handleOpenUpdateModal = (room) => {
        setSelectedRoom(room);
        setIsUpdateModalOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedRoom(null);
    };

    const handleUpdateRoom = () => {
        if (selectedRoom) {
            handleCloseUpdateModal();
        }
    };


     return (
        <ContentWrapper header={<h1 className="m-0"><i className="nav-icon fas fa-bed" style={{ color: '#525252' }}></i> Rooms</h1>}>
            <button
                type="button"
                className="mb-2 btn btn-primary"
                data-toggle="modal"
                data-target="#modal-addroom"
            >
                Add Room
            </button>
            <hr />
            <AddroomModal />
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
                                placeholder="Search room number..."
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

                        <Link href="/rooms">
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
                            <th>Room Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.data.map((room) => (
                            <tr key={room.id}>
                                <td>{room.id}</td>
                                <td>{room.room_number}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        data-toggle="modal"
                                        data-target="#modal-editroom"
                                        onClick={() =>
                                            handleOpenUpdateModal(room)
                                        }
                                    >
                                        <i className="fas fa-pen"></i>
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        data-toggle="modal"
                                        data-target="#modal-deleteroom"
                                        onClick={() =>
                                            handleOpenDeleteModal(room)
                                        }
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                {/* <div className='flex items-center gap-2'>
                {rooms.links.map((link, index) => (
                        <Link key={index}
                                href={link.url}
                                className='text-sm text-white bg-blue-500 rounded p2'>
                            <div dangerouslySetInnerHTML={{ _html:link.label}} />

                        </Link>
                    ))}

                </div> */}
                 <nav>
                    <ul className="pagination mb-3">
                        {rooms.links.map((link, index) => (
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
            {isRoomModalOpen && <AddroomModal onClose={handleCloseRoomModal} />}

            {isUpdateModalOpen && (
                <EditroomModal
                    room={selectedRoom}
                    onClose={handleCloseUpdateModal}
                />
            )}

            {isDeleteModalOpen && (
                <DeleteroomModal
                    roomId={selectedRoom?.id}
                    roomNumber={selectedRoom?.room_number}
                    onClose={handleCloseDeleteModal}
                />
            )}
        </ContentWrapper>
    );
}

export default Rooms;
