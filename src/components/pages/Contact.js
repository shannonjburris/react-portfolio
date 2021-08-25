import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid  If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email  is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
    

    };
    // clear out the input after a successful message.
    setName('');
    setMessage('');
    setEmail('');
  };
  return (
    <div class="body">
      <header>
      <h1>Contact</h1>
      </header>
      <container id="contact-form">
      <form>
        <div class="form-group">
          <label for="name1">Name</label>
          <input onChange={handleInputChange} type="name" class="form-control" id="name1" placeholder="Name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange={handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="message1">Message</label>
          <input onChange={handleInputChange} type="message" class="form-control" id="message1" placeholder="Message" />
        </div>
        <button type="submit" class="btn btn-primary" id="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      </container>
      <div class="flex-row">
            <div>
            </div>
            
        </div>

    </div>
  );
}
