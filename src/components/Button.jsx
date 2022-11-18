
import PropTypes from "prop-types";

function Button({ text, color,clique }) {
  let style = {
    backgroundColor: color,
  };
 

  return (
    <button onClick={clique} style={style} className="btn">
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "hhhhh",
  color: "green",
};

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    clique:PropTypes.func,
}

export default Button;
