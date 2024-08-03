import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { Head, router, useForm, usePage } from '@inertiajs/react';

function AddtenantModal({onClose, show, rooms }){

    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
        tenant_name: '',
        tenant_cnumber: '',
        tenant_email: '',
        room_id: '',
        start_date: '',
      })

      const props = usePage().props

      function AddHandleSubmit(e) {
        e.preventDefault()

        clearErrors();
        let hasErrors = false;

        if (!data.tenant_name) {
          setError('tenant_name', 'Full Name is required');
          hasErrors = true;
        }

        if (!data.tenant_cnumber) {
            setError('tenant_cnumber', 'Cellphone Number is required');
            hasErrors = true;
          }

          if (!data.tenant_email) {
            setError('tenant_email', 'Email Address is required');
            hasErrors = true;
          }

          if (!data.room_id) {
            setError('room_id', 'Select Room is required');
            hasErrors = true;
          }

          if (!data.start_date) {
            setError('start_date', 'Date Start is required');
            hasErrors = true;
          }

        if (!hasErrors) {
             post('/add-tenants', {
                _token: props.csrf_token,
                tenant_name: tenant_name,
                tenant_cnumber: tenant_cnumber,
                tenant_email: tenant_email,
                room_id: room_id,
                start_date: start_date

              });

            toast.success("Added Tenant Successfully!");
            $("#tenant_name").val("");
            $("#tenant_cnumber").val("");
            $("#tenant_email").val("");
            $("#room_id").val("");
            $("#start_date").val("");
            onClose();

            }

         }

        const roomOptions = rooms.map(room => ({
         value: room.id,
         label: room.room_number
      }));


  return (
    <div className="modal fade" id="modal-addtenant" show={show}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Add Tenant</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={AddHandleSubmit} id="form-addtenant">
                <div className="modal-body">

                    <div className="mb-1">
                        <label htmlFor="tentantName" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tenant_name"
                            placeholder='Tenant Name'
                            value={data.tenant_name} onChange={e => setData('tenant_name', e.target.value)}
                        />
                        {errors.tenant_name && <div className="text-danger">{errors.tenant_name}</div>}
                    </div>

                    <div className="mb-1">
                        <label htmlFor="tenantNumber" className="form-label">Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tenant_cnumber"
                            placeholder='Tenant Number'
                            value={data.tenant_cnumber} onChange={e => setData('tenant_cnumber', e.target.value)}
                        />
                        {errors.tenant_cnumber && <div className="text-danger">{errors.tenant_cnumber}</div>}
                    </div>

                    <div className="mb-1">
                        <label htmlFor="tenantNumber" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="tenant_email"
                            placeholder='Tenant Email'
                            value={data.tenant_email} onChange={e => setData('tenant_email', e.target.value)}
                        />
                        {errors.tenant_email && <div className="text-danger">{errors.tenant_email}</div>}
                    </div>

                    <div className="mb-1">
                    <label htmlFor="RoomId" className="form-label">Room Number</label>
                    <Select
                        id="room_id"
                        options={roomOptions}
                        value={roomOptions.find((option) => option.value === data.room_id)}
                        onChange={(option) => setData('room_id', option ? option.value : '')}
                        isClearable
                    />
                     {errors.room_id && <div className="text-danger">{errors.room_id}</div>}
                    </div>

                    <div className="mb-1">
                       <label htmlFor="tenantstart" className="form-label">Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="start_date"
                            placeholder='Date Start'
                            value={data.start_date} onChange={e => setData('start_date', e.target.value)}
                        />
                         {errors.start_date && <div className="text-danger">{errors.start_date}</div>}
                    </div>
                </div>
                <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-default" data-dismiss="modal"  onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary" disabled={processing}>Save</button>
                </div>
            </form>
        </div>
      </div>
    </div>
   );

}

export default AddtenantModal;
