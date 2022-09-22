import "./home.css";
import * as homePageComp from "../../components/";

export const HomePage = () => {
  return (
    <div className="mp_home-page mp-page">
      <div className="mp_homepage-content-section mp-page-content-section">
        <homePageComp.Introduction />
        <homePageComp.Technologies />
        <homePageComp.Projects />
        <homePageComp.Education />
        <homePageComp.Blogs />
        <homePageComp.Paintings />
      </div>
    </div>
  );
};
