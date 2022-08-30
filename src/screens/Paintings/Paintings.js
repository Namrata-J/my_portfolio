import "./paintings.css";
import { Header, Footer, PaintingsListing } from "../../components/";

const PaintingsPage = () => {
    return (
        <div className="mp_projects-page mp-page">
            <Header />
            <div className="mp_projects-content-section mp-page-content-section">
                <PaintingsListing />
                <Footer />
            </div>
        </div>
    );
}

export { PaintingsPage };