import { Form, Navigate, useLoaderData } from "react-router-dom";



export const Register = () => {

    const data = useLoaderData();
  const userData = data?.user?.userData;
  if (!userData) {
    console.log(userData);
  return (
    <>
      <div className="container">
        <h2>Register</h2>

        <Form 
        method="post" 
        className="register-form"
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
              name="phoneNumber"
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
  );}
  return <Navigate to={"/index"}/>
};
