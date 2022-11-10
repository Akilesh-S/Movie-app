import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./FilterSection.module.css";
import dropDownArrow from "../../assets/arrow drop downpng.png";

export const FilterSection = () => {
  const [isAll, setIsAll] = useState(true);
  const [isSeries, setIsSeries] = useState(false);
  const { isAllHandler, isSeriesHandler } = useContext(AppContext);

  const seriesCheckHandler = () => {
    isSeriesHandler(!isSeries);
    setIsSeries(!isSeries);
  };

  const allCheckHandler = () => {
    isAllHandler(!isAll);
    setIsAll(!isAll);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Filter</div>

      <div className={styles.filters}>
        {/* sort section */}
        <p className={styles.text}>Sort</p>
        <span className={styles.year}>1999</span>
        <img src={dropDownArrow} alt="dropDownArrow" />

        {/* Genre section */}
        <p className={styles.genere}>Genre</p>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            title="all"
            value="all"
            checked={isAll}
            onChange={allCheckHandler}
          />
          All
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            title="series"
            value="series"
            checked={isSeries}
            onChange={seriesCheckHandler}
          />
          Series
        </label>
      </div>
    </div>
  );
};
