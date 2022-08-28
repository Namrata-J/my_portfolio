import "./home.css";
import { Header } from "../../components/";
import * as homePageComp from "../../components/";

const HomePage = () => {
    return (
        <div className="mp_home-page mp-page">
            <Header />
            <div className="mp_homepage-content-section mp-page-content-section">
               <homePageComp.Introduction />
               <homePageComp.Technologies /> 
            </div>
        </div>
    );
}

export { HomePage };