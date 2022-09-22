import { Routes, Route } from "react-router-dom";
import { LayoutPageComponent } from "../components/Layout";

// SCREENS
import { BlogsPage } from "../screens/Blogs";
import { HomePage } from "../screens/Home";
import { PaintingsPage } from "../screens/Paintings";
import { ProjectsPage } from "../screens/Projects";

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
