import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import ContactForm from '../../components/form/ContactForm';

const UserProfile = ({ user, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {user.username} | {APP_NAME}
      </title>
      <meta name="description" content={`Blogs by ${user.username}`} />
      <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
      <meta property="og:description" content={`Blogs by ${user.username}`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className="mt-4 mb-4" key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <a className="lead pl-2" style={{fontWeight:"400"}}> • {blog.title}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <Fragment>
      {head()}
      <Layout>
        <div className="container " >
          <div className="row " >
            <div className="col-md-12">
              <div className="card" style={{backgroundColor:"#fefbd8"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3" style={{ textAlign: "center" }}>
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        className="img img-fluid img-thumbnail mb-3"
                        style={{
                          maxHeight: "180px",
                          maxWidth: "100%",
                          borderRadius: "50%",
                        }}
                        alt="user profile"
                      />
                    </div>
                    <div
                      className="col-md-9 pt-4"
                      // style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <h4>{user.name}</h4>
                      <p className="text-muted">
                        Joined {moment(user.createdAt).fromNow()}
                      </p>
                      <h4>About Me</h4>
                      <p className="text-muted">{user.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="container pb-5" >
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body" style={{backgroundColor:"#f2f2f2", height:"auto"}}>
                  <h5 className=" card-title bg-success pt-4 pb-4 pl-4 pr-4 text-white" style={{borderRadius:"5px"}}>
                    Recent blogs by {user.name}
                  </h5>

                  {showUserBlogs()}
                </div>
              </div>
            </div>

            <div className="col-md-6" >
              <div className="card" >
                <div className="card-body" style={{backgroundColor:"#f2f2f2"}}>
                  <h5 className="card-title bg-info pt-4 pb-4 pl-4 pr-4 text-light" style={{borderRadius:"5px"}}>
                    Message {user.name}
                  </h5>
                  <br />
                  {/* <p>contact form</p> */}
                  <ContactForm  authorEmail={user.email}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  // console.log(query);
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default UserProfile;
