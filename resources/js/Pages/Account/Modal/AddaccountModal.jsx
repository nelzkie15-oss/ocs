
import { useForm, router, usePage  } from '@inertiajs/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddaccountModal({onClose, show}){

    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
        uname: '',
        email: '',
        password: '',
      })

      const props = usePage().props

      function submit(e) {
        e.preventDefault()

        clearErrors();
        let hasErrors = false;

        if (!data.uname) {
          setError('uname', 'Full Name is required');
          hasErrors = true;
        }

        if (!data.email) {
          setError('email', 'Email Address is required');
          hasErrors = true;
        }

        if (!data.password) {
          setError('password', 'Password is required');
          hasErrors = true;
        }
        if (!hasErrors) {
             post('/addaccount', {
                _token: props.csrf_token,
                uname: uname,
                email: email,
                password: password,

              });

            toast.success("Added Account Successfully!");
            $("#uname").val("");
            $("#email").val("");
            $("#password").val("");
            $("#form-addu")[0].reset();
            onClose();


            }

         }

  return (
    <div className="modal fade" id="modal-addaccount" show={show}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Add Account</h4>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClose={onClose}>
                <span aria-hidden="true">&times;</span>
            </button> */}
            </div>
            <form onSubmit={submit} id="form-addu">
                <div className="modal-body">

                    <div className="mb-3">
                     <label htmlFor="Name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="uname"
                            placeholder='Full Name'
                            value={data.uname} onChange={e => setData('uname', e.target.value)}
                        />
                        {errors.uname && <div className="text-danger">{errors.uname}</div>}
                    </div>

                    <div className="mb-3">
                     <label htmlFor="Email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder='Email'
                            value={data.email} onChange={e => setData('email', e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                     <label htmlFor="Password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder='Password'
                            value={data.password} onChange={e => setData('password', e.target.value)}
                        />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
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

export default AddaccountModal;
