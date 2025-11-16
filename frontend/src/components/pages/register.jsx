import { Form } from "react-router-dom";
import { useRef } from "react";


export const Register = () => {
  const formRef = useRef();
  return (
    <>
      <div className="container">
        <h2>Register</h2>

        <Form 
        method="post" 
        className="register-form"
        ref={formRef}
        onSubmit={() => {
          setTimeout(() => {
            formRef.current?.reset();   // 🔥 clears form
          }, 10);
        }}
        >
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>


          <button type="submit" className="btn">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};
