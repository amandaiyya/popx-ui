import { Outlet } from "react-router-dom";

// Layout Wrapper for the whole app
function Layout() {
  return (
    <div className="w-screen h-screen">
      {/* Outlet for routing */}
      <Outlet />
    </div>
  )
}

export default Layout;
