import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formState;

    return ( 
        <section>
            <form id='contact-me'>
                <div>
                 <label htmlFor="name">Name:</label>
                    <input 
                        type = "text"
                        name = "name"
                    />
                </div>

                <div>
                 <label htmlFor="email">Email:</label>
                    <input 
                        type = "email"
                        name = "email"
                    />
                </div>
                <div>
                 <label htmlFor="message">Message:</label>
                    <input 
                        type = "message"
                        rows = ""
                    />
                </div>

            </form>
        </section>
    );

}

export default Contact;