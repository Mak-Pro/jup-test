"use client";
import { SearchField } from "./Field";
import styles from "./style.module.scss";

export const AddonSearch = () => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__top}>
          <h3 className={styles.search__title}>Search</h3>
        </div>
        <div className={styles.search__center}>
          <div className={styles.search__action}>
            <SearchField />
          </div>
        </div>
        <div className={styles.search__bottom}></div>
      </div>
    </>
  );
};
