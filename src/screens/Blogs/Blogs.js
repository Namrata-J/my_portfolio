import "./blogs.css";
import { Header, Footer, BlogsListing } from "../../components/";

const BlogsPage = () => {
    return (
        <div className="mp_projects-page mp-page">
            <Header />
            <div className="mp_projects-content-section mp-page-content-section">
                <BlogsListing />
                <Footer />
            </div>
        </div>
    );
}

export { BlogsPage };