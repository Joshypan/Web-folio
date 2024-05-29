import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/contact', {
            name,
            email,
            message
        }).then(response => {
            alert('Message sent successfully');
            setName('');
            setEmail('');
            setMessage('');
        }).catch(error => {
            console.error('There was an error sending the message!', error);
        });
    };

    return (
        <div className="my-5">
            <h2 className="mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea 
                        className="form-control" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send</button>
            </form>
        </div>
    );
};

export default Contact;
