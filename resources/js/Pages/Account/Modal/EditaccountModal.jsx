import { useState, useEffect} from 'react'
import { router, useForm, usePage, Head} from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditaccountModal({onClose, show, account}){

      const [formData, setFormData] = useState({
        uname: account.uname,
        email: account.email,
        status: account.status,

      });

      useEffect(() => {
        if (account) {
          setFormData({
            uname: account.uname || '',
            email: account.email || '',
            status: account.status || ''
          });
        }
      }, [account]);


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        router.put(`/update-account/${account.id}`, formData, {
          onSuccess: () => {
            onClose();
            toast.success("Update Account Successfully!");
          },
          onError: (errors) => {
            console.log('Update failed:', errors);
          }
        });
      };


  return (
    <div className="modal fade" id="modal-editaccount" show={show}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Edit Account</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={handleSubmit} id="form-addu">
                <div className="modal-body">

                    <div className="mb-3">
                     <label htmlFor="Name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="uname"
                             name="uname"
                            value={formData.uname}
                            onChange={handleChange}
                        />
                        {/* {errors.name && <div className="text-danger">{errors.name}</div>} */}
                    </div>

                    <div className="mb-3">
                     <label htmlFor="Email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {/* {errors.email && <div className="text-danger">{errors.email}</div>} */}
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

export default EditaccountModal;
