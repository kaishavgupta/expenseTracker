import { Navigate, NavLink, useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import { logout } from "../../api/localProvider";
import { toast } from "react-toastify";

export const Header = () => {
  const data = useLoaderData();
  
  const userData = data?.user?.userData;
  const navigate = useNavigate();
  const { revalidate } = useRevalidator();
  const handleLogout=()=>{
    logout()
    revalidate()
    navigate("/login")
    toast("Logout Successfull")
  }

  // const {username,email}=userData
  return (
    <header className="navbar">
      {userData?.username && <h2>WELCOME {userData.username}</h2>}

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>

          {!userData ? (
            <>
              <li>
                <NavLink to="/login" className="nav-item">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="nav-item">
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/index" className="nav-item">
                  Index
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
