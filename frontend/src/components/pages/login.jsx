import { Form, Navigate, useLoaderData } from "react-router-dom";

export const Login = () => {
    const data = useLoaderData();
    console.log(data);
    
  const userData = data?.user?.userData;
  if (!userData) {
    
  return (
    <>
      <div className="container">
        <h2>Login</h2>

        <Form
          className="login-form"
          method="post">

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
  );}
  return <Navigate to={"/index"}/>
};
