import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { HeaderComponent } from "../header";

// Since your site will have several pages and these
// pages will always have the same Header and Footer,
// so we will use the react-router-dom Outlet so that
// it remembers the components and only changes the
// ones that are in the <Outlet /> Tag
// link: https://reactrouter.com/en/main/components/outlet

// Another say, if you don't need to create functions
// inside your component you can change this:
// export const LayoutPageComponent = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

// therefore:

export const LayoutPageComponent = () => (
  <>
    <HeaderComponent />
    <div style={{ paddingTop: 100 }}>
      <Outlet />
    </div>
    <Footer />
  </>
);
