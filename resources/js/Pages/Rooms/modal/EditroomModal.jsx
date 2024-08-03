import { useState, useEffect} from 'react'
import { router, useForm, usePage, Head} from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditroomModal({room, onClose}){

    const [formData, setFormData] = useState({
        room_number: room.room_number,
      });

      useEffect(() => {
        if (room) {
          setFormData({
            room_number: room.room_number || ''
          });
        }
      }, [room]);


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        router.put(`/update-room/${room.id}`, formData, {
          onSuccess: () => {
            onClose();
            toast.success("Update Room Successfully!");
          },
          onError: (errors) => {
            console.log('Update failed:', errors);
          }
        });
      };


  return (
    <div className="modal fade" id="modal-editroom">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Edit Room</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="mb-3">
                     <label htmlFor="roomNumber" className="form-label">Room Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='RM-0001'
                        id="room_number"
                        name="room_number"
                        value={formData.room_number}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
        </div>
    </div>
   );

}

export default EditroomModal;
