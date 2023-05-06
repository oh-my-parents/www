import { Outlet } from "react-router-dom";
import $ from "./Layout.module.scss";
import cn from "classnames";

const Layout = () => {
  return (
    <div className={cn($.layout)}>
      <Outlet />
    </div>
  );
};

export default Layout;
