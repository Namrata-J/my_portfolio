import { Routes, Route } from "react-router-dom";
import { LayoutPageComponent } from "../components/Layout";
import { HomePage, ProjectsPage, BlogsPage, PaintingsPage } from "../screens/";

// Hello Namrata Jain, I hope you are well.
// I came to make some changes to your project 
// and I will leave several comments explaining 
// why the code I added, so you can learn too.

export const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPageComponent />}>
        <Route path="" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="paintings" element={<PaintingsPage />} />
      </Route>
    </Routes>
  );
}
