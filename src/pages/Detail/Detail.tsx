import { useState } from "react";
import styles from "./Detail.module.scss";
import test from "@images/Carlo Rizzi.jpg";
import { useAppContext } from "@context/appContext";
import { useParams } from "react-router-dom";
import { convertSlugToString, letterCapitalize } from "@utils/string";

const Detail = () => {
  const { employees } = useAppContext();
  const params = useParams();
  const nameLowercase = convertSlugToString(params?.id as string);
  const name = letterCapitalize(nameLowercase);
  const employee = employees?.find((employee) =>  employee.name === name) ?? null
 
  const [popularity, setPopularity] = useState<number>(
    employee?.popularity ?? 0
  );

  const onChangePopularity = (value: number) => {
    setPopularity(value);
  };
  return (
    <div className={styles["detail"]}>
      <div className={styles["avatar"]}>
        <img src={`/src/assets/images/profiles/${employee?.image}`} alt="employee-img" width={125} height={125} />
      </div>
      <div className={styles["content"]}>
        <h2 className={styles["title"]}> {employee?.name} </h2>
        <div className={styles["slider-popularity"]}>
          <div className={styles["title-popularity"]}>Popularity</div>
          <input
            type="range"
            min="1"
            max="100"
            defaultValue={employee?.popularity}
            className={styles["slider"]}
            onChange={(e) => onChangePopularity(+e.target.value)}
          />
        </div>
        <div className={styles["card-biography"]}>
            <div className={styles["title-biography"]}>Biography</div>
            <div
              className={styles["content-biography"]}
              style={{
                fontSize: popularity / (employee?.popularity ?? 1) + "rem",
              }}
            >
              {employee?.biography}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Detail;
