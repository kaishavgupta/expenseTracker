import {
  NavLink,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import { logoutUser } from "../../api/collectData";
import { toast } from "react-toastify";

export const Header = () => {
  const data = useLoaderData();
  const userData = data?.user?.userData;

  const navigate = useNavigate();
  const { revalidate } = useRevalidator();

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res) {
      revalidate();
      navigate("/login");
      toast("Logout Successful");
    }
  };

  return (
    <header className="navbar enhanced-navbar">
      <div className="nav-left">
        <NavLink to="/">
        <h2 className="brand-logo">💸 ExpenseTracker</h2>
        </NavLink>
      </div>

      {userData?.username && (
        <>
          <div className="Welcome">Welcome {userData.username}</div>
        </>
      )}

      <nav>
        <ul className="nav-links enhanced-links">
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
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
