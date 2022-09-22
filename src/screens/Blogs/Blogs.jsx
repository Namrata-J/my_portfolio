import "./blogs.css";
import { BlogsListing } from "../../components/";

export const BlogsPage = () => {
  return (
    <div className="mp_projects-page mp-page">
      <div className="mp_projects-content-section mp-page-content-section">
        <BlogsListing />
      </div>
    </div>
  );
};
