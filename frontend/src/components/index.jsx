import { Navigate, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { Balance } from "./balance";
// import { Footer } from "./Layout/footer";
import { FormData } from "./form";
import { Transaction } from "./transaction";

export const Index = () => {
  const data = useLoaderData();
  const userData = data?.user?.userData;
  if (userData) {

    
    return (
      <>
        <main className="container">
          <section className="form-section">
            <FormData />
          </section>

          {/* <!-- Balance Summary --> */}
          <section className="summary">
            <Balance />
          </section>

          {/* <!-- Transaction List --> */}
          <section className="transactions">
            <Transaction />
          </section>
        </main>

        {/* <Footer /> */}
      </>
    );
  }

  return <Navigate to="/login"/>
};
