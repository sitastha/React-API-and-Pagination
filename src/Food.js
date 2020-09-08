import React from "react";
import style from "./recepie.module.css";

const Food = ({ title, calorie, images, ingredient }) => {
  return (
    <div className={style.recepies}>
      <h1>{title}</h1>
      <p>{calorie}</p>
      <ol>
        {ingredient.map(materials => (
          <li>{materials.text}</li>
        ))}
      </ol>

      <img src={images} alt="" />
    </div>
  );
};
export default Food;
