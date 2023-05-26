import styles from "./Sidebar.module.scss";
import { useAppContext } from "@context/appContext";
import Logo from "@images/logo/the-godfather.svg";
import Close from "@images/close.svg";
import Menu from "@images/menu.svg";
import { slugify, mergeClasses } from "@utils/string";
import { Link, useParams } from "react-router-dom";
const Sidebar = () => {
  const { employees } = useAppContext();
  const params = useParams();
  return (
    <aside className={styles["aside"]}>
      <label htmlFor="menu" className={styles["menu"]}>
        <img src={Menu} alt="menu" width={30} height={30}/>

        <input
          id="menu"
          name="menu"
          type="checkbox"
        />
      </label>

      <nav className={styles["sidebar"]}>
        <div className={styles["logo"]}>
          <img src={Logo} alt="logo" />
        </div>
        <ul className={styles["list"]}>
          {employees?.map((employee) => (
            <li
              className={mergeClasses([
                styles["item"],
                params.id === slugify(employee?.name ?? "") && styles["active"],
              ])}
              key={slugify(employee?.name ?? "")}
            >
              <Link to={slugify(employee?.name ?? "")}> {employee?.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <label htmlFor="menu" className={styles["cancel"]}>
        <img src={Close} alt="close" width={30} height={30} />
      </label>
    </aside>
  );
};

export { Sidebar };
