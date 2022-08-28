import "./home.css";
import { Header, Introduction } from "../../components/";

const HomePage = () => {
    return (
        <div className="mp_home-page mp-page">
            <Header />
            <div className="mp_homepage-content-section mp-page-content-section">
               <Introduction /> 
            </div>
        </div>
    );
}

export { HomePage };