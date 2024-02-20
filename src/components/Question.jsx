import PropTypes from "prop-types";
import { useState } from "react";

const Question = ({ title, info }) => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState("+");
  const buttonHandler = () => {
    setClicked((prev) => {
      return !prev;
    });
    clicked
      ? setButton((prevButton) => (prevButton = "+"))
      : setButton((prevButton) => (prevButton = "-"));
  };

  return (
    <article className="w-[700px] flex flex-col items-center justify-between my-8 mx-4 shadow-lg outline outline-blue-200 rounded-lg">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <p className="capitalize font-semibold">{title}</p>
        <button
          onClick={buttonHandler}
          className="rounded-full bg-blue-400 px-2 py-1 text-xl text-white"
        >
          {button}
        </button>
      </div>
      {clicked && <div className="w-full px-4 py-2 text-sm">{info}</div>}
    </article>
  );
};

Question.propTypes = {
  title: PropTypes.node,
  info: PropTypes.node,
};

export default Question;
