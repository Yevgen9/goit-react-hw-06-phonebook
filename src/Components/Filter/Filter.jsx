import React from "react";
import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/filterSlice";
import s from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={s.filterForm}
      type="text"
      name="filter"
      onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
      placeholder="Enter text"
    ></input>
  );
};

export default Filter;
