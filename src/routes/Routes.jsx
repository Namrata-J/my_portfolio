import { Routes, Route } from "react-router-dom";
import { HomePage, ProjectsPage, BlogsPage, PaintingsPage } from "../screens/";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/paintings" element={<PaintingsPage />} />
        </Routes>
    );
}

export { RoutesComp };