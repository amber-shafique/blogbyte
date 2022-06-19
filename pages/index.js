import { Fragment, default as React } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Footer from "./Footer";

const Index = () => {
  return (
    <Fragment>
      <Layout>
        {/* <h1 style={{ margin: "20px" }}>Home Page</h1>
        <div
          style={{
            // backgroundColor: "hsla(236, 81%, 45%, 0.6)"
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              padding: "50px",
              textAlign: "center",
              // background: "-webkit-linear-gradient(45deg, #09009f, #00ff95 80%)",
              background:
                "-webkit-linear-gradient(35deg, #ec008c, #0070f3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            
            }}
          >
            PROGRAMMING & WEB DEVELOPMENT BLOGS
          </h1>
        </div>
        <br />
        <div
          style={{
            padding: "50px",
            margin: "50px",
            textAlign: "left",
            backgroundColor: "hsla(229, 67%, 66%, 0.5)",
          }}
        >
          <img src="static/images/lady.gif" width="400" />
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          <img src="static/images/info3.svg" width="1200" height="497" />
        </div>
        <img src="static/images/info2.svg" width="1200" height="497" />
         */}

        

        <article className="overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  className="display-4 font-weight-bold"
                  style={{
                    padding: "10px 0px 5px 0px",
                    background:
                      "-webkit-linear-gradient(35deg, #ec008c, #0070f3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    // textDecoration:'overline underline',
                    // // textUnderlineOffset:'1em'   ,
                    // textDecorationColor: '#5c4678'
                  }}
                >
                  PROGRAMMING & WEB DEVELOPMENT BLOGS{" "}
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center pt-2 pb-4">
                <p className="lead" style={{ color: "#670e89" }}>
                  {/* Best programming and web development blogs on React Node
                  NextJs and JavaScript */}
                  Publish your passions, your way Create a unique and
                  knowledgeful blog. It’s easy and free.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div
              className="row pl-5 "
              style={{
                // backgroundImage: "url(static/images/vback.jpg)",
                opacity: "0.9",
                objectFit: "cover",
                backgroundImage: "url(static/images/back3.jpg)",

                background: "black",

                overflow: "hidden",
                background: "#C33764",
                background:
                  '-webkit-linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url("https://bit.ly/2rlzaXi")',
                background:
                  'linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url("https://bit.ly/2rlzaXi")',
              }}
            >
              <div className="col-md-4 pl-5 pb-4 pt-4">
                <img src="static/images/lady.gif" width="350" />
              </div>
              <div
                className="col-md-8 pb-5 pt-5 pl-5 pr-5"
                style={{
                  color: "white",
                  lineHeight: "50px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Georgia",
                }}
              >
                <h2
                // className="lead"
                >
                  Best programming and web development blogs on latest
                  frameworks and libraries
                </h2>
                {/* <div className="col-md-12">
                <p>Publish your passions, your way Create a unique and
                  knowledgeful blog. It’s easy and free.</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col-md-12 text-center pt-5 pb-5"
                style={{
                  textDecoration: "overline underline",
                  textUnderlineOffset: "1em",
                  textDecorationColor: "#5c4678",
                }}
              >
                <h2
                  className="display-4 font-weight-bold"
                  style={{
                    padding: "0px 0px 5px 0px",
                    background:
                      "-webkit-linear-gradient(35deg, #ec008c, #0070f3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Famous Blog Categories{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="flip flip-horizontal">
                  <div
                    className="front"
                    style={{
                      opacity: "0.9",
                      // backgroundImage:
                      // "url(" +
                      // "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      // ")",
                      backgroundImage: "url(static/images/back2.jpg)",
                    }}
                  >
                    <h2 className="text-shadow text-center h1">React</h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/react">
                      <a>
                        <h3 className="h1">React Js</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The world's most popular frontend web development library
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="flip flip-horizontal">
                  <div
                    className="front"
                    style={{
                      opacity: "0.9",
                      // backgroundImage:
                      //   "url(" +
                      //   "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      //   ")",
                      backgroundImage: "url(static/images/back2.jpg)",
                    }}
                  >
                    <h2 className="text-shadow text-center h1">Node</h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/node">
                      <a>
                        <h3 className="h1">Node Js</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="flip flip-horizontal">
                  <div
                    className="front"
                    style={{
                      opacity: "0.9",
                      // backgroundImage:
                      //   "url(" +
                      //   "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      //   ")",
                      backgroundImage: "url(static/images/back2.jpg)",
                    }}
                  >
                    <h2 className="text-shadow text-center h1">Next</h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/nextjs">
                      <a>
                        <h3 className="h1">Next Js</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      A Production ready web framework for building SEO React
                      apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>

      <div className="head">
        <div className="container contain">
          <button id="goTopButton">
            <i className="fas fa-arrow-circle-up text-white"></i>
          </button>
          <div className="row">
            <div className="row justify-content-center padding-bottom-150">
              <div className="col-lg-10 w--100">
                <div className="row justify-content-around text-center">
                  <div className="col-md-12 py-3 py-md-5 py-lg-5">
                    <h4 className="font-weight-boldest font-size-30pt blue-text-dark text-uppercase padding-bottom-120">
                      Meet Our Team
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Index;
