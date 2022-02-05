import "./top.scss";

export default function Top(props) {
  return (
    <div className="top">
      <h1 className="computer">{props.text}</h1>
    </div>
  );
}
