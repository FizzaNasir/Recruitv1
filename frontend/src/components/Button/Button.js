import { useState } from "react";
import "./Button.css";
export default function Button({
  Variant,
  Name,
  Type,
  Id,
  HandleClick,
  Title,
}) {
  return (
    <button
      name={Name}
      type={Type}
      id={Id}
      className={["btn", Variant].join(" ")}
      onClick={HandleClick}
    >
      {Title}
    </button>
  );
}
