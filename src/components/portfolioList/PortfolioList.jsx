import React from "react";
import "./portfolioList.scss";

export default function PortfolioList({ item, selected, setSelected }) {
  return (
    <li className={"portfolioList " + (item.id === selected ? "active" : "")} onClick={setSelected}>
      {item.name}
    </li>
  );
}
