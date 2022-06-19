import Link from "next/link";
import { API } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-info mr-1 ml-1 mt-3 rounded-pill">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-info mr-1 ml-1 mt-3 rounded-pill">
          {t.name}
        </a>
      </Link>
    ));

  return (
    <div
      className="lead pb-4"
      style={{
        color: "black",
        marginLeft: "50px",
        marginRight: "50px",
        paddingLeft: "50px",
        paddingRight: "50px",
        // paddingTop:"10px",
        borderRadius: "10px",
        // background: "linear-gradient(to bottom , #ccffff 50%, #ccccff 100%)",
        backgroundColor: "hsla(229, 67%, 66%, 0.2)",
      }}
    >
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p
          className="mark ml-1 pt-2 pb-2 rounded-pill"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "grey",
            border:"2px solid lightgray",
            color: "white",
            // borderRadius: "20px",
          }}
        >
          {/* {blog.updatedAt} */}
          Written by "{" "}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a style={{color:'cyan'}}>{blog.postedBy.username}</a>
          </Link>{" "}
         " | Published {moment(blog.updatedAt).fromNow()}
        </p>
      </section>
      <section>
        {/* <p>blog categories </p> */}
        {showBlogCategories(blog)}
        {/* <br /> */}
        {/* <p>blog  tags</p> */}
        {showBlogTags(blog)}
        <br />
        <br />
      </section>

      <div className="row">
        <div className="col-md-4">
          <section>
            <img
              className="img img-fluid img-thumbnail  border border-primary"
              style={{
                height: "240px",
                width: "100%",
                
                // borderRadius: "20px",
                // maxHeight: "200px",
                // width: "500px",
                // height: "400px",
                // border: "1px solid black",
                // padding: "0px",
                margin: "0px",
              }}
              // style={{ maxHeight: "200px", width: "500px" ,height:"300px",marginRight:"20px"}}

              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </section>
        </div>
        <div className="col-md-8">
          <section>
            {/* <div className="pb-3">{blog.excerpt}</div> */}
            <div className="pb-3">{renderHTML(blog.excerpt)}</div>
            <div style={{ textAlign: "left", marginLeft: "200px" }}>
              <Link href={`/blogs/${blog.slug}`}>
                <a
                  className="btn btn-success btn-lg pt-2"
                  style={{ backgroundColor: "mediumseagreen" }}
                >
                  Read more
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
