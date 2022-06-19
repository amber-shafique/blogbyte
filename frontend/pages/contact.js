import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <Layout >
      <div className="container" >
        <div className="row ">
          <div
            className="col-md-8 offset-md-2  mb-5"
            style={{
              backgroundColor: "hsla(229, 67%, 66%, 0.2)",
              borderRadius: "5px",
              padding: "0 100px 0 100px",
              border: "1px solid lightgray",
              borderRadius:"5%"
            }}
          >
            <div
              className="text-center rounded-pill p-2 bg-info text-white mt-4 "
              // style={{ width: "350px"}}
            >
              <h2>Contact form</h2>
            </div>

            <hr />
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
