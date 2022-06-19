import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const SmallCard = ({ blog }) => {
  return (
    <div className="card" style={{ border: "1px solid gray" }}>
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              className="img img-fluid rounded"
              style={{ height: "200px", width: "100%" }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </a>
        </Link>
      </section>

      <div className="card-body">
        <section>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h4 className="card-title">{blog.title}</h4>
            </a>
          </Link>
          <div className="card-text" style={{ height: "150px" }}>
            {renderHTML(blog.excerpt.substring(0, 150))}
          </div>
          {/* <p className="card-text">{renderHTML(blog.excerpt)}</p> */}
        </section>
      </div>

      <div className="card-body " style={{ backgroundColor: "#ffef96" }}>
        Posted {moment(blog.updatedAt).fromNow()} by{" "}
        {/* <Link href={`/`}>
                    <a className="float-right">{blog.postedBy.username}</a>
                </Link> */}
        <Link href={`/profile/${blog.postedBy.username}`}>
          <a>{blog.postedBy.username}</a>
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
