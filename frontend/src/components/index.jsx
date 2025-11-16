import { Balance } from "./balance";
// import { Footer } from "./Layout/footer";
import {  FormData } from "./form";
import { Transaction } from "./transaction";

export const Index = () => {
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
};