import classNames from "../../../utils/classNames";
const Card = (props) => {
  return (
    <div
      className={classNames(
        "shadow-xl rounded-xl transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
export default Card;
