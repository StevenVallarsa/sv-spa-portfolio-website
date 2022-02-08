import React from "react";
import "./portfolioList.scss";

export default function PortfolioList({ item, isSelected, setSelected }) {
  return (
    <li className={"portfolioList " + (isSelected && "active")} onClick={setSelected}>
      {item.name}
    </li>
  );
}
