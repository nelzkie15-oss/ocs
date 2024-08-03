
import { useForm, router } from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteaccountModal({AccountId, AccountName, onClose, show}){

      const handleDelete = (e) => {
        e.preventDefault();

        router.delete(`/delete/account/${AccountId}`, {
        });
        toast.success("Deleted Account Successfully!");
        onClose();
      };

  return (
    <div className="modal fade" id="modal-deleteaccount" show={show}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Delete Account</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={handleDelete}>
                <div className="modal-body">
                    <div className="mb-3">

                       <p className='text-center'>Are you sure you want to delete User: <b>{AccountName}</b> ?</p>
                    </div>
                </div>
                <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-default" data-dismiss="modal"  onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary">Delete</button>
                </div>
            </form>
        </div>
        </div>
    </div>
   );

}

export default DeleteaccountModal;
