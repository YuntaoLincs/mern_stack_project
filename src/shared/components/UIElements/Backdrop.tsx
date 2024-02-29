import ReactDOM from "react-dom";

import "./Backdrop.css";

type BackdropType = {
  onClick: () => void;
};

const Backdrop = ({ onClick }: BackdropType) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
