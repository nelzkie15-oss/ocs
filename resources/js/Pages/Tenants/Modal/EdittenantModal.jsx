import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { Head, router, useForm, usePage } from '@inertiajs/react';

function EdittenantModal({onClose, show, rooms, tenant }){

      const [formData, setFormData] = useState({
        tenant_name: tenant.tenant_name,
        tenant_cnumber: tenant.tenant_cnumber,
        tenant_email: tenant.tenant_email,
        room_id: tenant.room_id,
        start_date: tenant.start_date,
        end_date: tenant.end_date,
        status: tenant.status,
        status: tenant.amount,
        payment_status: tenant.payment_status
      });

      useEffect(() => {
        if (tenant) {
          setFormData({
            tenant_name: tenant.tenant_name || '',
            tenant_cnumber: tenant.tenant_cnumber || '',
            tenant_email: tenant.tenant_email || '',
            room_id: tenant.room ? tenant.room.id : '',
            start_date: tenant.start_date || '',
            end_date: tenant.end_date || '',
            status: tenant.status || '',
            status: tenant.amount || '',
            payment_status: tenant.payment_status || '',
          });
        }
      }, [tenant]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        router.put(`/tenants/${tenant.id}`, formData, {
          onSuccess: () => {
            onClose();
            toast.success("Updated Tenant Successfully!");
          },
          onError: (errors) => {
            console.log('Update failed:', errors);
          }
        });
      };


      const roomOptions = rooms.map(room => ({
        value: room.id,
        label: room.room_number
      }));

      const selectedRoom = roomOptions.find(option => option.value === formData.room_id);


  return (
    <div className="modal fade" id="modal-edittenant" show={show}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Edit Tenant</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={handleSubmit} id="form-addtenant">
                <div className="modal-body">

                    <div className="mb-1">
                        <label htmlFor="tentantName" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Tenant Name'
                            id="tenant_name"
                            name="tenant_name"
                            value={formData.tenant_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="tenantNumber" className="form-label">Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tenant_cnumber"
                            name="tenant_cnumber"
                            value={formData.tenant_cnumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="tenantNumber" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="tenant_email"
                            name="tenant_email"
                            value={formData.tenant_email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="room_id" className="form-label">Room Number</label>
                        <Select
                        id="room_id"
                        options={roomOptions}
                        value={selectedRoom}
                        onChange={option => setFormData({
                            ...formData,
                            room_id: option ? option.value : ''
                        })}
                        isClearable
                        />
                    </div>

                    <div className="mb-1">
                       <label htmlFor="tenantstart" className="form-label">Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="start_date"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-1">
                       <label htmlFor="tenantend" className="form-label">End Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="end_date"
                            name="end_date"
                            value={formData.end_date}
                            onChange={handleChange}
                        />
                    </div>


                 <div className="mb-1">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                        id="status"
                        name="status"
                        className="form-control"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    </select>
                </div>

                <div className="mb-1">
                        <label htmlFor="tentantName" className="form-label">Amount</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Amount of Pay'
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>

                <div className="mb-1">
                    <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
                    <select
                        id="payment_status"
                        name="payment_status"
                        className="form-control"
                        value={formData.payment_status}
                        onChange={handleChange}
                        required
                    >
                    <option value="">Select Status</option>
                    <option value="Paid">Paid</option>
                    <option value="UnPaid">UnPaid</option>
                    </select>
                </div>

                </div>
                <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-default" data-dismiss="modal"  onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary" >Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
   );

}



export default EdittenantModal;
