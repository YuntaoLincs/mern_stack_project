import ReactDOM from "react-dom";
import { type ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

type SideDrawerProps = {
  children: ReactNode;
  show: boolean;
  onClickFn: () => void;
};

const SideDrawer = ({ children, show, onClickFn }: SideDrawerProps) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={onClickFn}>
        {children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
