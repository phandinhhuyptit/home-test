import { Header, Main, Sidebar } from "@components/index";
import styles from "./Layout.module.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "@context/appContext";
import { slugify } from "@utils/string";
const Layout = ({}) => {
  const { employees } = useAppContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const url = employees?.length ? employees[0]?.name : "";
    const slug = slugify(url as string);
    if (pathname === "/") {
      navigate(`/${slug}`);
    }
  }, []);

  return (
    <div className={styles["layout"]}>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export { Layout };
