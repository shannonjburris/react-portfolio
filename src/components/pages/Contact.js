import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
      <div class="form-group">
    <label for="name1">Name</label>
    <input type="name" class="form-control" id="name1" placeholder="Name" />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label for="message1">Message</label>
    <input type="password" class="form-control" id="message1" placeholder="Message" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
  );
}
