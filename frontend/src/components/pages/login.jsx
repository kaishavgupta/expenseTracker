import { Form } from "react-router-dom";
import { useRef } from "react";

export const Login = () => {
  const formRef = useRef();
  return (
    <>
      <div className="container">
        <h2>Login</h2>

        <Form
          className="login-form"
          method="post"
          ref={formRef}
          onSubmit={() => {
            setTimeout(() => {
              formRef.current?.reset(); // 🔥 clears form
            }, 10);
          }}
        >
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
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};
