import "./paintings.css";
import { PaintingsListing } from "../../components/";

export const PaintingsPage = () => {
	return (
		<div className="mp_projects-page mp-page">
			<div className="mp_projects-content-section mp-page-content-section">
				<PaintingsListing />
			</div>
		</div>
	);
}
