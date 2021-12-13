import react from 'react'
import { useState } from 'react';

const Contact = () => {

    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    function SubmitForm(e) {
        e.preventDefault();
        alert('Full Name: '+contactName+', Email: '+contactEmail+', Message: '+contactMessage);
    }

    return (
        <>
            <div id='contact' className='container-fluid'>
                <h1 className='text-center my-4'>
                    Contact Us
                </h1>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={SubmitForm}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} required className="form-control" id="exampleInputName" placeholder="Enter your full name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail">Email address</label>
                                <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Message</label>
                                <textarea value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required className="form-control" id="exampleInputMessage" placeholder="Enter your message" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;