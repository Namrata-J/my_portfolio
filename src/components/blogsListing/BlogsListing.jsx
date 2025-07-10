import "./blogsListing.css";
import { blogsList } from "../../constants/blogsList";

const BlogsListing = () => {
  return (
    <div className="mp_paintings-listing-container">
      <h4 className="mp_font2">
        To read more of my blogs.
        <a
          rel="noreferrer"
          href="https://namratajain.hashnode.dev/"
          target="_blank"
        >
          <button className="mp_font2">Click here</button>
        </a>
      </h4>
      <div className="mp_blogsListing-container mp_fc">
        {blogsList.map((blog, index) => (
          <div key={index} className="mp_blog-card">
            <a rel="noreferrer" href={blog.link} target="_blank">
              <img src={blog.img} alt="blog img" />
            </a>
            <p className="mp_blog-published-date mp_font2">{blog.date}</p>
            <p className="mp_blog-title mp_font2">{blog.title}</p>
            <p className="mp_blog-description mp_font2">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { BlogsListing };
