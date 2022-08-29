import "./blogsListing.css";
import { blogsList } from "../../constants/blogsList";

const BlogsListing = () => {
    return (
        <div className="mp_blogsListing-container mp_fc">
            {
                blogsList.map((blog, index) =>
                    <div key={index} className="mp_blog-card">
                        <img src={blog.img} alt="blog img" />
                        <p className="mp_blog-published-date mp_font2">
                            {blog.date}
                        </p>
                        <p className="mp_blog-title mp_font2">
                            {blog.title}
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export { BlogsListing };