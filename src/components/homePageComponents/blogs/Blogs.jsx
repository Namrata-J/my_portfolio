import "./blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="mp_blogs-section mp_homePage-sub-section mp_font1">
            <h4 className="mp_homePage-section-heading">Blogs</h4>
            <div className="mp_blogs mp_sub-section mp_fc">
                <p className="mp_font2">
                    I also write blogs as i like to document my journey of learning.
                     Have a look at my blogs.
                </p>
                <Link
                    to="/blogs"
                    className="mp_blogs-link mp_sub-section-link">
                    <button className="mp_font2">My Blogs</button>
                </Link>
            </div>
        </div>
    );
}

export { Blogs };