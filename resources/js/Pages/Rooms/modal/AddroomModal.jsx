
import { useForm, router, usePage  } from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddroomModal({onClose, show}){

    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
        room_number: '',
      })

      const props = usePage().props

      function submit(e) {
        e.preventDefault()

        clearErrors();
        let hasErrors = false;
        if (!data.room_number) {
          setError('room_number', 'Room Number is required');
          hasErrors = true;
        }
        if (!hasErrors) {
             post('/addrooms', {
                _token: props.csrf_token,
                room_number: room_number,

              });

            toast.success("Added Room Successfully!");
            $("#room_number").val("");
            $("#form-add")[0].reset();
            onClose();


            }

         }

  return (
    <div className="modal fade" id="modal-addroom" show={show}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Add Room</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={submit} id="form-add">
                <div className="modal-body">
                    <div className="mb-3">
                     <label htmlFor="roomNumber" className="form-label">Room Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="room_number"
                        placeholder='RM-0001'
                        value={data.room_number} onChange={e => setData('room_number', e.target.value)}
                    />
                    {errors.room_number && <div className="text-danger">{errors.room_number}</div>}

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

export default AddroomModal;
