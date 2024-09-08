"use client";
import Image from "next/image";
import { useState, useEffect, useRef, FocusEvent } from "react";
import styles from "./style.module.scss";

export const SearchField = ({
  callBack,
}: {
  callBack: (value: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchValue.length === 43 || searchValue.length === 44) {
      callBack(searchValue);
    }
  }, [searchValue]);

  const handleFocusBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (
      inputRef &&
      inputRef.current !== null &&
      inputRef.current.value === ""
    ) {
      if (e.type === "focus") {
        document.querySelector("main")?.classList.add("search-active");
        document
          .querySelector(".action-box")
          ?.classList.add("action-box-active");
      }
      if (e.type === "blur") {
        document.querySelector("main")?.classList.remove("search-active");
        document
          .querySelector(".action-box")
          ?.classList.remove("action-box-active");
      }
    }
  };

  return (
    <div className={`${styles.search__action} action-box`}>
      <h6 className={styles.search__action_title}>
        To buy a token enter a token address
      </h6>
      <div className={styles.search__action_field}>
        <Image
          src="/icons/addon-search-icon.svg"
          width={20}
          height={20}
          alt="search"
        />
        <input
          type="text"
          placeholder="Type or paste address here"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={(e) => handleFocusBlur(e)}
          onBlur={(e) => handleFocusBlur(e)}
          ref={inputRef}
        />
      </div>
    </div>
  );
};
