import "./spiner.css";

const Spiner = (props) => {
  const num = ["spin1", "spin2", "spin3"];
  const random = num[Math.floor(Math.random() * 3)];

  return (
    <div>
      <div class={random}></div>
      <div>{props.msg}</div>
    </div>
  );
};
Spiner.defaultProps = {
  msg: "Loading...",
};
export default Spiner;
